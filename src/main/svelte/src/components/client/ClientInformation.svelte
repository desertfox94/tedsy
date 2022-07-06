<script lang="ts">
import type { ClientDetails } from "../../api/ClientDetails";
import { I18N } from "../../I18N";

	export let id : any;

    export let clientDetails : ClientDetails = null
    let editing = false

    if (clientDetails === null) {
        editing = true;
        clientDetails = {
        preName : "",
        surName : "",
        street : "",
        houseNumber : "",
        zipCode : "",
        email : "",
        city : "",
    }
    }


    function startEditing() {
        editing = true
    }

</script>

<section class="p-6 bg-gray-100 text-gray-900">
	<form action="" class="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<fieldset class="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
			<div class="space-y-2 col-span-full lg:col-span-1">
				<p class="font-medium">Personal Inormation</p>
				<p>ID: {id}</p>
				<p class="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
			</div>
			<div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div class="col-span-full sm:col-span-3">
					<label for="firstname" class="text-sm">{$I18N["preName"]}</label>
                    <input class:not-editing={!editing} on:click={startEditing} id="firstname" type="text" value={clientDetails.preName} placeholder="Vorname" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-600 border-gray-300 text-gray-900">
				</div>
				<div class="col-span-full sm:col-span-3">
					<label for="lastname" class="text-sm">{$I18N["surName"]}</label>
					<input class:not-editing={!editing} on:click={startEditing} id="lastname" value={clientDetails.surName} type="text" placeholder="Nachname" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-600 border-gray-300 text-gray-900">
				</div>
                <div class="col-span-full  sm:col-span-4">
					<label for="street" class="text-sm">{$I18N["street"]}</label>
					<input class:not-editing={!editing} on:click={startEditing} id="street" type="text" value={clientDetails.street} placeholder="Straße" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-600 border-gray-300 text-gray-900">
				</div>
				<div class="col-span-full sm:col-span-2">
					<label for="houseNumber" class="text-sm">{$I18N["houseNumber"]}</label>
					<input class:not-editing={!editing} on:click={startEditing} id="houseNumber" type="text" value={clientDetails.houseNumber} placeholder="Hausnummer" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-600 border-gray-300 text-gray-900">
				</div>
                <div class="col-span-full sm:col-span-2">
					<label for="zip" class="text-sm">{$I18N["zipCode"]}</label>
					<input class:not-editing={!editing} on:click={startEditing} value={clientDetails.zipCode} id="zip" type="text" placeholder="PLZ"  class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-600 border-gray-300 text-gray-900">
				</div>
                <div class="col-span-full sm:col-span-4">
					<label for="city" class="text-sm">{$I18N["city"]}</label>
					<input class:not-editing={!editing} on:click={startEditing} value={clientDetails.city} id="city" type="text" placeholder="" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-600 border-gray-300 text-gray-900">
				</div>
                <div class="col-span-full">
					<label for="email" class="text-sm">{$I18N["email"]}</label>
					<input class:not-editing={!editing} on:click={startEditing} value={clientDetails.email} id="email" type="email" placeholder="Email" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-600 border-gray-300 text-gray-900">
				</div>
			</div>
		</fieldset>
		<fieldset class="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
			<div class="space-y-2 col-span-full lg:col-span-1">
				<p class="font-medium">Profile</p>
				<p class="text-xs">Adipisci fuga autem eum!</p>
			</div>
			<div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div class="col-span-full sm:col-span-3">
					<label for="username" class="text-sm">Username</label>
					<input id="username" type="text" placeholder="Username" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-600 border-gray-300 text-gray-900">
				</div>
				<div class="col-span-full sm:col-span-3">
					<label for="website" class="text-sm">Website</label>
					<input id="website" type="text" placeholder="https://" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-600 border-gray-300 text-gray-900">
				</div>
				<div class="col-span-full">
					<label for="bio" class="text-sm">Bio</label>
					<textarea id="bio" placeholder="" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-600 border-gray-300 text-gray-900"></textarea>
				</div>
				<div class="col-span-full">
					<label for="bio" class="text-sm">Photo</label>
					<div class="flex items-center space-x-2">
						<img src="https://source.unsplash.com/30x30/?random" alt="" class="w-10 h-10 rounded-full bg-gray-500 bg-gray-300">
						<button type="button" class="px-4 py-2 border rounded-md border-gray-800">Change</button>
					</div>
				</div>
			</div>
		</fieldset>
	</form>
</section>

<style>
    .not-editing {
        background-color: transparent;
    }
</style>