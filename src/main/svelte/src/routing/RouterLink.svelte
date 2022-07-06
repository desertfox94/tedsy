<script lang="ts">
import { I18N } from "../I18N";

    
    import { active, navigateTo, routes } from "./Store";

    export let page : string

    $: activeClass = $active && $active.page === page ? " text-emerald-600 border-emerald-600" : "";
    $: route = routes.find(p => p.page === page)
    $: console.log(route)
    $: title = route ? route.title.startsWith("I18N.") && $I18N ? $I18N[route.title.replace("I18N.", "")] : route.title : 'bRoKEn'
    
</script>

<li on:click={() => navigateTo(page)} class={$$props.class + activeClass}>
    {title}
</li>
