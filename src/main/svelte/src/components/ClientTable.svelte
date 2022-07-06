<script lang="ts">
	import type {Client} from "../api/Client";
	import { createEventDispatcher } from 'svelte';
	import { I18N } from "../I18N";

	const dispatch = createEventDispatcher();

	function editClient(client : Client) {
		dispatch('edit', {
			client: client
		});
	}


    let clients : Client[] = [
        {
			id : 1,
            preName : "Hart",
            surName : "Hagerty",
            iconUrl : "https://daisyui.com/tailwind-css-component-profile-2@56w.png",
            nextSession : "22.07.2022"
        },
        {
			id : 2,
            preName : "Hart",
            surName : "Hagerty",
            iconUrl : "https://daisyui.com/tailwind-css-component-profile-2@56w.png",
            nextSession : "22.07.2022"
        },
        {
			id : 3,
            preName : "Hart",
            surName : "Hagerty",
            iconUrl : "https://daisyui.com/tailwind-css-component-profile-2@56w.png",
            nextSession : "22.07.2022"
        },
        {
			id : 4,
            preName : "Hart",
            surName : "Hagerty",
            iconUrl : "https://daisyui.com/tailwind-css-component-profile-2@56w.png",
            nextSession : "22.07.2022"
        },
        {
			id : 5,
            preName : "Hart",
            surName : "Hagerty",
            iconUrl : "https://daisyui.com/tailwind-css-component-profile-2@56w.png",
            nextSession : "22.07.2022"
        },
        {
			id : 6,
            preName : "Hart",
            surName : "Hagerty",
            iconUrl : "https://daisyui.com/tailwind-css-component-profile-2@56w.png",
            nextSession : "22.07.2022"
        }
    ]

</script>


<div class="container p-2 mx-auto sm:p-4 text-gray-800">
	<h2 class="mb-4 text-2xl font-semibold leading-tight">{$I18N["clients"]}</h2>
	<div class="overflow-x-auto">
		<table class="min-w-full">
			<colgroup>
				<col>
				<col>
				<col>
				<col>
				<col class="w-24">
			</colgroup>
			<thead class="bg-gray-300">
				<tr class="text-left">
					<th class="p-3">{$I18N["fullName"]}</th>
					<th class="p-3">{$I18N["nextSession"]}</th>
					<th class="p-3">{$I18N["lastSession"]}</th>
					<th class="p-3">{$I18N["status"]}</th>
					<th class="p-3"></th>
				</tr>
			</thead>
			<tbody>
				{#each clients as client}
				<tr class="border-b border-opacity-20 border-gray-300 bg-gray-50">
					<td class="p-3">
						<p>{client.preName + " " + client.surName}</p>
					</td>
					<td class="p-3">
						<p class="text-gray-600">Friday</p>
						<p>14 Jan 2022</p>
					</td>
					<td class="p-3">
						<p>01 Feb 2022</p>
						<p class="text-gray-600">Tuesday</p>
					</td>
					<td class="p-3 text-right">
						<span class="px-3 py-1 font-semibold rounded-md bg-emerald-600 text-gray-50">
							<span>{$I18N["status.active"]}</span>
						</span>
					</td>
					<td class="p-3 text-right">
						<i class="fa-solid mr-2 fa-pen-to-square text-xl text-emerald-600" title={$I18N["edit"]} on:click={() => editClient(client)}></i>
						<i class="fa-solid fa-calendar-day text-xl text-emerald-600"  title={$I18N["scheduleSession"]}></i>
					</td>
				</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	i {
		cursor: pointer;	
	}
</style>