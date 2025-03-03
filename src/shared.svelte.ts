import type { ColorTheme, CVFormData } from '@/types';

export const initialColor = '#1E6691';

export const colorTheme = $state<ColorTheme>({
	active: initialColor,
	hoverColor: undefined
});

export const cv = $state<CVFormData>({
	name: '',
	position: '',
	about: '',
	email: '',
	phone: '',
	address: '',
	website: '',
	linkedin: '',
	github: '',
	educations: [
		{
			schoolName: '',
			schoolDuration: undefined
		}
	],
	experiences: [
		{
			experienceName: '',
			experiencePosition: '',
			experienceDuration: undefined
		}
	]
});
