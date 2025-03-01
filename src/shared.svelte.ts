import type { Color } from '@/types/color.types';

export const initialColor = '#1E6691';

export const color = $state<Color>({
	active: initialColor,
	hoverColor: undefined
});
