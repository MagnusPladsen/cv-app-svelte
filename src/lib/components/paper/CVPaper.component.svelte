<script lang="ts">
	import { cv, colorTheme } from '../../../shared.svelte';
	import { Button } from '$lib/components/ui/button';
	import { File } from 'lucide-svelte';
	import { capitalizeFirstLetter, dateToLocalDateString } from '@/utils';
	import LineSeperator from '../LineSeperator.component.svelte';

	let cvPaper = $state<HTMLDivElement>();

	function handlePrint() {
		// need to implement library so classes are not lost
		/* const printWindow = window.open('', '', 'height=400,width=600');
		if (!cvPaper) return;
		printWindow?.document.write(cvPaper.innerHTML);
		printWindow?.document.close();
		printWindow?.print(); */
		console.log(cv);
	}
</script>

<div class="my-4 hidden w-fit flex-col gap-4 rounded-lg md:flex">
	<Button onclick={handlePrint} class="w-fit">
		<File class="mr-1 h-4 w-4" />
		Get CV file
	</Button>
	<div
		bind:this={cvPaper}
		style:color={colorTheme.hoverColor ?? colorTheme.active}
		class="print:ring-none flex h-[297mm] w-[210mm] gap-4 overflow-hidden rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition-all duration-200 print:h-screen print:w-full print:rounded-none print:border-none print:shadow-none"
	>
		<!--  Left side -->
		<div
			style:background-color={colorTheme.hoverColor ?? colorTheme.active}
			class="w-[35%] max-w-[33%] px-4 pt-10 text-white transition-all duration-200"
		></div>

		<!-- Right side -->
		<div class="flex w-full max-w-[480px] flex-col pl-4 pt-10">
			<h2 class="text-2xl font-bold">
				{#if cv.name?.length > 0}
					{capitalizeFirstLetter(cv.name)}
				{:else}
					Your Name
				{/if}
			</h2>
			<p class="text-sm font-medium">
				{#if cv.position?.length > 0}
					{capitalizeFirstLetter(cv.position)}
				{:else}
					Position
				{/if}
			</p>

			<LineSeperator />

			<div class="pt-6 text-lg">
				<p class="font-bold">About me</p>
				<p class="text-sm text-black">
					{#if cv.about?.length > 0}
						{capitalizeFirstLetter(cv.about)}
					{:else}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Quisquam, quos.
					{/if}
				</p>
			</div>

			{#if cv.educations[0]?.schoolName.length > 0}
				<LineSeperator />
				<div class="flex flex-col pt-6">
					<p class="font-bold">Education</p>

					<div class="flex flex-col gap-2 text-black">
						{#each cv.educations as education (education)}
							{#if education.schoolName.length > 0}
								<div>
									<p class="text-sm font-bold">{education.schoolName}</p>
									{#if education.schoolDuration?.start && education.schoolDuration?.end}
										<p class="text-xs text-muted-foreground">
											{dateToLocalDateString(education.schoolDuration.start)} -{' '}
											{dateToLocalDateString(education.schoolDuration.end)}
										</p>
									{/if}
								</div>
							{/if}
						{/each}
					</div>
				</div>
			{/if}

			{#if cv.experiences[0]?.experienceName.length > 0}
				<LineSeperator />
				<div class="flex flex-col pt-6">
					<p class="font-bold">Experience</p>

					<div class="flex flex-col gap-2 text-black">
						{#each cv.experiences as experience (experience)}
							{#if experience.experienceName.length > 0}
								<div>
									<p class="text-sm font-bold">{experience.experienceName}</p>
									<p class="text-sm">{experience.experiencePosition}</p>

									{#if experience.experienceDuration?.start && experience.experienceDuration?.end}
										<p class="text-xs text-muted-foreground">
											{dateToLocalDateString(experience.experienceDuration.start)} -{' '}
											{dateToLocalDateString(experience.experienceDuration.end)}
										</p>
									{/if}
								</div>
							{/if}
						{/each}
					</div>
				</div>
			{/if}

			<LineSeperator />
		</div>
	</div>
</div>
