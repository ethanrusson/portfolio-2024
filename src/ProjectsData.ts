export interface ProjectsDataInterface {
  title: string
  thumbnail: string
  url: string
  skills: string[]
}

export const ProjectsData: ProjectsDataInterface[] = [
  {
    title: 'Ohanami Scoring Companion',
    thumbnail: new URL('./assets/thumbnail-ohanami.png', import.meta.url).href,
    url: 'https://ohanamiscorer.ethanrusson.com/',
    skills: ['Design + Code', 'Vue']
  },
  {
    title: 'Cutthroat Lawncare',
    thumbnail: new URL('./assets/thumbnail-cutthroat.png', import.meta.url).href,
    url: 'https://cutthroatlawncare.com/',
    skills: ['Design + Code', 'Branding', 'Vue']
  },
  {
    title: 'Bridal Shower Invitation',
    thumbnail: new URL('./assets/thumbnail-emily.png', import.meta.url).href,
    url: 'https://emilys-bridal-shower.netlify.app/',
    skills: ['Design + Code', 'Angular', 'Photography']
  },
  {
    title: 'Tangled in Tulle',
    thumbnail: new URL('./assets/thumbnail-tangled-in-tulle.png', import.meta.url).href,
    url: 'https://tangledtulle.com/',
    skills: ['Design + Code', 'Vanilla JS']
  },
  {
    title: 'Wealth of Health Nutrition',
    thumbnail: new URL('./assets/thumbnail-wealth-of-health.png', import.meta.url).href,
    url: 'https://wealthofhealthnutrition.com/',
    skills: ['Design + Code', 'PHP/Custom Wordpress', 'Example']
  },
  {
    title: 'Behance Projects',
    thumbnail: new URL('./assets/thumbnail-behance.png', import.meta.url).href,
    url: 'https://www.behance.net/ethanrusson',
    skills: ['Branding', 'Illustration']
  }
]
