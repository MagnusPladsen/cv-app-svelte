<script lang="ts">
	import { Plus, X } from 'lucide-svelte';
	import { cv } from '../../../shared.svelte';
	import DateRangePicker from '../DateRangePicker/DateRangePicker.component.svelte';
	import FormInput from './FormInput.component.svelte';
	import { Button } from '../ui/button';

	const removeExperience = (index: number) => {
		if (cv.experiences.length === 1) return;
		cv.experiences = cv.experiences.filter((_, i) => i !== index);
	};

	const addExperience = () => {
		cv.experiences.push({
			experienceName: '',
			experienceDuration: undefined
		});
	};
</script>

<div class="flex flex-col gap-2">
	<p class="text-xl">Experience</p>
	<div class="mb-4 w-full border-b-[0.5px] border-white"></div>

	{#each cv.experiences as experience, index (experience)}
		<div class="flex flex-col gap-2">
			<FormInput
				label="Company"
				name={`experience.${index}.experienceName`}
				bind:value={experience.experienceName}
				containerClass="w-[350px]"
			/>

			<FormInput
				label="Position"
				name={`experience.${index}.experiencePosition`}
				bind:value={experience.experiencePosition}
				containerClass="w-[350px]"
			/>

			<div class="">
				<label for={'experience.${index}.experienceDuration'} class="text-lg font-bold">
					Duration
				</label>
				<DateRangePicker bind:value={experience.experienceDuration} containerClass="w-[350px]" />
			</div>

			{#if index > 0}
				<Button size="sm" variant="destructive" on:click={() => removeExperience(index)}>
					<X class="h-4 w-4" />
					Remove
				</Button>
			{/if}
		</div>
	{/each}

	<Button variant="outline" on:click={addExperience} class="mt-4 w-fit">
		<Plus class="h-4 w-4" />
		Add experience
	</Button>
</div>
