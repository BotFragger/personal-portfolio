export const ROUTES = {
  HOME: '/',
  ABOUT : '/about-me',
  BLOG: {
    ROOT: '/blog',
    DETAIL: (id: any) => `/blog/${id}`
  },
  CONTACT: '/contact',
  EXPERIENCE: '/experience',
  PROJECTS: {
    ROOT: '/projects',
    DETAIL: (id: any) => `/experience/${id}`
  }
} as const