export interface ProjectsDataInterface {
    title: string;
    thumbnail: string;
    url: string;
    skills: string[];
}

export const ProjectsData: ProjectsDataInterface[] = [
    {
        title: 'Ohanami Scoring Companion',
        thumbnail: '/src/assets/thumbnail-ohanami.png',
        url: 'https://ohanamiscorer.ethanrusson.com/',
        skills: [
            'Design + Code',
            'Vue'
        ]
    },
    {
        title: 'Bridal Shower Invitation 1',
        thumbnail: '/src/assets/thumbnail-emily.png',
        url: 'https://emilys-bridal-shower.netlify.app/',
        skills: [
            'Design + Code',
            'Angular',
            'Photography'
        ]
    },
    {
        title: 'Bridal Shower Invitation 2',
        thumbnail: '/src/assets/thumbnail-elle.png',
        url: 'https://elles-bridal-shower.netlify.app/',
        skills: [
            'Design + Code',
            'Angular'
        ]
    },
    {
        title: 'Tangled in Tulle',
        thumbnail: '/src/assets/thumbnail-tangled-in-tulle.png',
        url: 'https://tangledtulle.com/',
        skills: [
            'Design + Code',
            'Vanilla JS'
        ]
    },
    {
        title: 'Wealth of Health Nutrition',
        thumbnail: '/src/assets/thumbnail-wealth-of-health.png',
        url: 'https://wealthofhealthnutrition.com/',
        skills: [
            'Design + Code',
            'PHP/Custom Wordpress',
            'Example'
        ]
    },
    {
        title: 'Behance Projects',
        thumbnail: '/src/assets/thumbnail-behance.png',
        url: 'https://www.behance.net/ethanrusson',
        skills: [
            'Branding',
            'Illustration'
        ]
    },
]