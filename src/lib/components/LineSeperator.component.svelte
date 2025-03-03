<script lang="ts">
	import { colorTheme } from '../../shared.svelte';

	interface props {
		class?: string;
	}

	let { class: className }: props = $props();
</script>

<div
	style:border-color={colorTheme.hoverColor ?? colorTheme.active}
	class=" mt-2 w-full border-b-[0.5px] transition-all duration-200 {className}"
></div>
