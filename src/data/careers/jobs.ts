export interface CareerRole {
  title: string;
  department: string;
  location: string;
  employmentType: string;
  description: string;
  applyUrl: string;
}

// Public roles will be added here when Kiyo Cloud is ready to hire.
export const CAREER_ROLES: CareerRole[] = [];
