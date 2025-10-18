export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface CompanyInfo {
  founded: string;
  employees: number;
  location: string;
  description: string;
}