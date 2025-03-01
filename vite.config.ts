import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCss from 'unocss/vite';
import extractorSvelte from '@unocss/extractor-svelte';

export default defineConfig({
	plugins: [
		UnoCss({
			mode: 'global',
			extractors: [extractorSvelte()]
			/* injectReset: '@unocss/reset/tailwind.css' */
		}),
		sveltekit()
	]
});
