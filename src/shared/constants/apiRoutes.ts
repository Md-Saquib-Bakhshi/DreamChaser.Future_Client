export const API_ROUTES = {
  // Home routes
  HERO: '/api/hero',
  STATS: '/api/stats',
  
  // About routes
  TEAM: '/api/team',
  COMPANY: '/api/company',
  
  // Project routes
  PROJECTS: '/api/projects',
  PROJECT_BY_ID: (id: string) => `/api/projects/${id}`,
  PROJECTS_BY_CATEGORY: (category: string) => `/api/projects?category=${category}`,
  
  // Contact routes
  CONTACT: '/api/contact',
  NEWSLETTER_SUBSCRIBE: '/api/newsletter/subscribe',
  
  // Auth routes (if needed)
  LOGIN: '/api/auth/login',
  REGISTER: '/api/auth/register',
  REFRESH_TOKEN: '/api/auth/refresh',
  LOGOUT: '/api/auth/logout',
} as const;