<script lang="ts">

    import { active } from "./Store";
    
</script>

{#if $active}
    <svelte:component this={$active.component} params={$active.getParams()} />
{/if}
