import type { DateRange } from 'bits-ui';

interface Education {
	schoolName: string;
	schoolDuration: DateRange | undefined;
}

interface Experience {
	experienceName: string;
	experiencePosition: string;
	experienceDuration: DateRange | undefined;
}

interface CVFormData {
	name: string;
	position: string;
	about: string;
	email: string;
	phone: string;
	address: string;
	website: string;
	linkedin: string;
	github: string;
	educations: Education[];
	experiences: Experience[];
}

export type { CVFormData, Education, Experience };
