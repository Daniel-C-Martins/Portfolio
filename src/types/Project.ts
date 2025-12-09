export type Category = 'All' | 'Frontend' | 'Backend' | 'Systems' | 'Full Stack' | 'Infrastructure' | 'Research';

export type ProjectType = 'academic' | 'personal' | 'professional';

export interface Project {
   id: number;
   titleKey: string;
   descriptionKey: string;
   techs: string[];
   categories: Category[];
   type: ProjectType;
   repoLink: string;
   deployLink?: string;
   image: string;
}