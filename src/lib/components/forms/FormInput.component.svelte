<script lang="ts">
	import { Input } from '../ui/input';
	import { Textarea } from '../ui/textarea';

	interface Props {
		label: string;
		name: string;
		textArea?: boolean;
		containerClass?: string;
		value: string;
	}
	let { label, name, textArea = false, containerClass = '', value = $bindable() }: Props = $props();

</script>

<div class="flex flex-col gap-1 {containerClass}">
	<label for={name} class="text-lg font-bold">
		{label}
	</label>
	{#if textArea}
		<Textarea bind:value class="bg-white text-black" rows={4} />
	{:else}
		<Input bind:value class="bg-white text-black" />
	{/if}
</div>
