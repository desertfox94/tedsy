import { Writable, writable } from "svelte/store"
import Blog from "../pages/Blog.svelte"
import About from "../pages/About.svelte"
import Home from "../pages/ClientDetails.svelte"
import SessionProtocol from "../pages/SessionProtocol.svelte"
import ClientOverview from "../pages/ClientOverview.svelte"
import ClientDetails from "../pages/ClientDetails.svelte"

export type Param = {
    key : string,
    value : string
}

export type Route = {
    page: string
    title: string,
    component: any
}

export interface ActiveRoute extends Route {
    params : Array<Param>

    getParams() : Map<String, String>
}

const landingPage : string = "/"

export const routes: Array<Route> = [
{
    page: "home",
    title: "Home",
    component: Home
},
{
    page: "clients",
    title: "I18N.clients",
    component: ClientOverview
},
{
    page: "protocol",
    title: "I18N.protocol",
    component: SessionProtocol
},
{
    page: "blog",
    title: "Blog",
    component: Blog
},
{
    page: "about",
    title: "About",
    component: About
}]

function newActiveRoute(route : Route, params : Array<Param>) : ActiveRoute {
    return {
        page: route.page,
        title : route.title,
        component : route.component,
        params : params,
        getParams() : Map<string, string> {
            let map = new Map<string, string>()
            params.forEach(param => map.set(param.key, param.value))
            return map
        },
    }
}

export function initRouter() {
    let urlParams = new URLSearchParams(window.location.search);
    let page = urlParams.get('p')
    let params : Array<Param> = []
    urlParams.forEach((value, key) => {
        if (key !== 'p') {
            params.push({key: key, value : value})
        }
    })
    window.onpopstate = function(event) {
        let path : string = event.state.path
        let urlParams = path.substring(path.indexOf('?'), path.length)
        setActivePageByutl(urlParams)
    }
    navigateTo(page, params)
}


function setActivePageByutl(path : string) {
    let urlParams = new URLSearchParams(path);
    let page = urlParams.get('p')
    let params : Array<Param> = []
    urlParams.forEach((value, key) => {
        if (key !== 'p') {
            params.push({key: key, value : value})
        }
    })
    setActivePage(page, params)
}

export function navigateTo(page: string, params : Array<Param> = []) {
    console.log("nav to", page)
    if (page) {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        if (page !== landingPage) {
            newurl += `?p=${page}`
            params.forEach(param => {
                newurl += `&${param.key}=${param.value}`
            });
        }

        window.history.pushState({ path: newurl }, '', newurl);
        
    } else {
        page = landingPage
    }
    setActivePage(page, params)
}

function setActivePage(page : string, params : Array<Param> ) {
    if (routes.find(r => r.page === page)) {
        active.set(newActiveRoute(routes.find(r => r.page === page), params))
    } else {
        active.set(newActiveRoute(routes[0], params))
    }
}

export let active: Writable<ActiveRoute> = writable()
