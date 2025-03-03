<script lang="ts">
	import { Plus, X } from 'lucide-svelte';
	import { cv } from '../../../shared.svelte';
	import DateRangePicker from '../DateRangePicker/DateRangePicker.component.svelte';
	import FormInput from './FormInput.component.svelte';
	import { Button } from '../ui/button';

	const removeEducation = (index: number) => {
		if (cv.educations.length === 1) return;
		cv.educations = cv.educations.filter((_, i) => i !== index);
	};

	const addEducation = () => {
		cv.educations.push({
			schoolName: '',
			schoolDuration: undefined
		});
	};
</script>

<div class="flex flex-col gap-2">
	<p class="text-xl">Education</p>
	<div class="mb-4 w-full border-b-[0.5px] border-white"></div>

	{#each cv.educations as education, index (education)}
		<div class="flex flex-col gap-2">
			<FormInput
				label="School name"
				name={`education.${index}.schoolName`}
				bind:value={education.schoolName}
				containerClass="w-[350px]"
			/>

			<div class="">
				<label for={'education.${index}.schoolDuration'} class="text-lg font-bold">
					Duration
				</label>
				<DateRangePicker bind:value={education.schoolDuration} containerClass="w-[350px]" />
			</div>

			{#if index > 0}
				<Button size="sm" variant="destructive" onclick={() => removeEducation(index)}>
					<X class="h-4 w-4" />
					Remove
				</Button>
			{/if}
		</div>
	{/each}

	<Button variant="outline" onclick={addEducation} class="mt-4 w-fit">
		<Plus class="h-4 w-4" />
		Add education
	</Button>
</div>
