import presetWind from '@unocss/preset-wind3';
import { defineConfig } from 'unocss';
import extractorSvelte from '@unocss/extractor-svelte';

export default defineConfig({
	presets: [presetWind()],
	extractors: [extractorSvelte()]
});
