export interface ExperienceDataInterface {
    dateRange: string;
    employer: string;
    title: string;
    skills: string[];
}

export const ExperienceData: ExperienceDataInterface[] = [
    {
        dateRange: '2023 — Present',
        employer: 'Stukent',
        title: 'Staff Engineer',
        skills: [
            'Angular',
            'Typescript',
            'Web Components'
        ]
    },
    {
        dateRange: '2021 — 2023',
        employer: 'eLuma',
        title: 'Senior UI/UX Designer, Frontend Engineer',
        skills: [
            'Vue',
            'Typescript',
            'Figma'
        ]
    },
    {
        dateRange: '2021 — 2023',
        employer: 'Stukent',
        title: 'Lead Product Designer, Frontend Engineer',
        skills: [
            'Angular',
            'Typescript',
            'Figma'
        ]
    },
    {
        dateRange: '2017 — 2019',
        employer: 'The Dealio Marketing',
        title: 'Graphic Designer, Frontend Engineer',
        skills: [
            'Adobe Creative Suite',
            'SEO, HTML + CSS',
            'Custom Wordpress (PHP)'
        ]
    },
    {
        dateRange: '2016 — 2017',
        employer: 'Utah Valley University',
        title: 'Graphic Designer',
        skills: [
            'Adobe Creative Suite'
        ]
    }
]