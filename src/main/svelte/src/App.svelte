<script lang="ts">

	import Navbar from './components/Navbar.svelte';
	import Router from './routing/Router.svelte';
	import { initRouter } from './routing/Store';



	initRouter()
</script>

<Navbar />

<div class="container mx-auto pt-4 pb-4">
	<Router />
</div>


<style  global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>