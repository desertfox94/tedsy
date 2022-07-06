<script lang="ts">
    
    import { navigateTo, Param } from "./Store";

    export let page : string
    export let param : Param = null
    export let params : Array<Param> = []
    if (param !== null) {
        params = [param]
    }

</script>

<button  on:click={() => navigateTo(page, params)} class={$$props.class}>
    <slot></slot>
</button>