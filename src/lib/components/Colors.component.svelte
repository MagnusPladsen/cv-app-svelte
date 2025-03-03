<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { colorTheme, initialColor } from '../../shared.svelte';

	function handleColorChange(newColor: string) {
		colorTheme.active = newColor;
	}

	function handleHoverColorChange(newHoverColor: string | undefined) {
		colorTheme.hoverColor = newHoverColor;
	}

	function handleResetColor() {
		colorTheme.active = initialColor;
	}

	const themeColors = [initialColor, '#85b4d0', '#335367', '#f0a500', '#008000', '#000080'];
</script>

<div class="flex flex-col gap-2">
	<p class="text-xl">Select your primary color</p>
	<div class="mb-5 w-full border-b-[0.5px] border-white"></div>
	<div class="flex flex-row items-center gap-3">
		{#each themeColors as color, i (color)}
			<input
				type="button"
				tabindex={i}
				class="h-[36px] w-[36px] cursor-pointer rounded-md border border-gray-200 border-opacity-50 shadow-2xl transition-all hover:scale-[1.05] hover:border-opacity-100"
				style="background-color: {color}; border-color: {color === colorTheme.active
					? 'white'
					: ''}; scale: {color === colorTheme.active ? 1.15 : 1}"
				onclick={() => handleColorChange(color)}
				onmouseenter={() => handleHoverColorChange(color)}
				onmouseleave={() => handleHoverColorChange(undefined)}
			/>
		{/each}
	</div>
</div>
