<script lang="ts">
	import Colors from '@/components/Colors.component.svelte';
	import PersonalInformation from '@/components/forms/PersonalInformation.component.svelte';
	import Header from '@/components/Header.component.svelte';
	import CVPaper from '@/components/paper/CVPaper.component.svelte';
</script>

<form>
	<div
		class="flex min-h-screen flex-row justify-between gap-8 bg-gradient-to-r from-teal-700 to-gray-900 px-8 pb-20 pt-8 text-white"
	>
		<div class="flex min-h-screen w-full max-w-[600px] flex-col gap-4">
			<Header />
			<Colors />
			<div class="mt-8 flex max-w-[600px] flex-col gap-16 overflow-y-auto">
				<PersonalInformation />
				<!-- <Education />
				<Experience /> -->
			</div>
		</div>

		<CVPaper />
	</div>
</form>
