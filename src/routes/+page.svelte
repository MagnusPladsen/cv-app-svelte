<script lang="ts">
	import Header from '@/components/Header.component.svelte';
	import Colors from '@/components/Colors.component.svelte';
	import { color, initialColor } from '../shared.svelte';

	let displayColor = $state<string>(initialColor);

	$effect(() => {
		displayColor = color.hoverColor ?? color.active;
	});
</script>

<form>
	<div
		class="flex min-h-screen flex-row justify-between gap-2 bg-gradient-to-r from-teal-700 to-gray-900 px-8 pb-20 pt-8 text-white"
	>
		<div class="flex min-h-screen w-full max-w-[600px] flex-col gap-6">
			<Header />
			<div class="flex max-w-[550px] flex-col gap-16">
				<Colors  />
				<p style="color: {displayColor}">Test</p>
			</div>
		</div>
	</div>
</form>
