import { writable, Writable } from "svelte/store"


export const lang: Writable<string> = writable(navigator.language)

export const I18N: Writable<Map<string, string>> = writable(new Map())

lang.subscribe(async language => {
    await loadLanguage(language).catch(_ => loadLanguage("en-EN")).then(i18n => I18N.set(i18n))
})

async function loadLanguage(language: string): Promise<Map<string, string>> {
    return fetch(`/lang/${language}.json`)
    .then(async resp => {
        return await resp.json();
    })
}
