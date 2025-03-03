<script lang="ts">
	import FormInput from './FormInput.component.svelte';
	import { cv } from '../../../shared.svelte';
</script>

<div class="flex flex-col gap-2">
	<p class="text-xl">Personal information</p>
	<div class="mb-4 w-full border-b-[0.5px] border-white"></div>

	<FormInput label="Full name" name="name" containerClass="w-[350px]" bind:value={cv.name} />
	<FormInput label="Position" name="position" containerClass="w-[350px]" bind:value={cv.position} />
	<FormInput
		label="About you"
		name="about"
		textArea
		containerClass="w-full"
		bind:value={cv.about}
	/>
</div>
