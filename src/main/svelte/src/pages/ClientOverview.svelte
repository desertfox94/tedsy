<script lang="ts">
    import type { Client } from "../api/Client";
    import ClientInformation from "../components/client/ClientInformation.svelte";
    import ClientTable from "../components/ClientTable.svelte";
    import { navigateTo } from "../routing/Store";

    export let params : Map<string, string> = new Map()

    $: clientId = params.get("clientId") // $active.params[0].value

    $: showClientDetails = clientId != null

    function onEditClient(client : Client) {
        navigateTo("clients", [{key : "clientId", value: "" + client.id}])
    }

</script>

<div class="container mx-auto p-4 backdrop-blur-md backdrop-brightness-75 rounded">
{#if showClientDetails}
     <ClientInformation id={clientId}></ClientInformation>
{:else}
     <ClientTable on:edit={(e) => onEditClient(e.detail.client)} />
{/if}

</div>
