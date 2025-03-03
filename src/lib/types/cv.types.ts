import type { DateRange } from "bits-ui";

interface Education {
	schoolName: string;
	schoolDuration: DateRange;
}

interface Experience {
	experienceName: string;
	experienceDuration: DateRange;
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
	education: Education[];
	experience: Experience[];
}

export type { CVFormData, Education, Experience };
