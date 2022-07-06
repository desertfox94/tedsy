import { Writable, writable } from "svelte/store";

export const page : Writable<string> = writable("");

export const theme : Writable<string> = writable("emerald-600")

export const themeBg : Writable<string> = writable("")
export const themeText : Writable<string> = writable("")
export const themeBorder : Writable<string> = writable("")

theme.subscribe(val => {
    themeBg.set(`bg-${val}`)
    themeBorder.set(`border-${val}`)
    themeText.set(`text-${val}`)
})
