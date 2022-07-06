<script lang="ts">
    
    import type { Client } from "../api/Client";
    import ClientInformation from "../components/client/ClientInformation.svelte";

    export let clientId : number = 1;



</script>

<ClientInformation />