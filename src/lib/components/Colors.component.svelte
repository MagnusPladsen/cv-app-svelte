<script lang="ts">
	import ColorPicker from 'svelte-awesome-color-picker';
	import { Button } from '$lib/components/ui/button';

	interface Props {
		handleColorChange: (color: string) => void;
		hex: string;
		handleHoverColorChange: (color: string | undefined) => void;
		handleResetColor: () => void;
	}

	let { handleColorChange, hex, handleHoverColorChange, handleResetColor }: Props = $props();

	let showColorPicker = $state<boolean>(false);

	function handleColorPickerInput(e: CustomEvent) {
		console.log(e);
		e.stopPropagation();
		if (e.detail.hex) {
			handleColorChange(e.detail.hex);
		}
	}

	const themeColors = ['#85b4d0', '#335367', '#f0a500', '#008000', '#000080'];
</script>

<div class="relative">
	<div class="flex flex-row items-center gap-4">
		{#each themeColors as color, i}
			<input
				type="button"
				tabindex={i}
				class="h-[36px] w-[36px] cursor-pointer rounded-md border border-white border-opacity-50 shadow-2xl transition-all duration-200 hover:scale-[1.05] hover:border-opacity-100"
				style="background-color: {color}"
				onclick={() => handleColorChange(color)}
				onmouseenter={() => handleHoverColorChange(color)}
				onmouseleave={() => handleHoverColorChange(undefined)}
			/>
		{/each}

		<Button class="bg-white text-black " onclick={() => (showColorPicker = true)}>
			Custom color
		</Button>
		<button
			class="cursor-pointer text-sm opacity-50 transition-all duration-200 hover:text-red-500 hover:opacity-100"
			onclick={() => handleResetColor()}
		>
			X Reset color
		</button>
	</div>
	{#if showColorPicker}
		<div class="absolute left-0 top-0">
			<ColorPicker
				position="responsive"
				isDialog={false}
				isOpen
				{hex}
				on:input={handleColorPickerInput}
			/>
			<button class="bg-white text-black" onclick={() => (showColorPicker = false)}>Close</button>
		</div>
	{/if}
</div>
