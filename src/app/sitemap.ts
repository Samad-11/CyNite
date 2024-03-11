import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://cynet.jimsd.org',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://acme.com/gallery',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://acme.com/event/clipclash',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6,
        },
        {
            url: 'https://acme.com/ui_universe',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6,
        },
        {
            url: 'https://acme.com/tezar_heist',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6,
        },
        {
            url: 'https://acme.com/arcade_arena',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: 'https://acme.com/quiz_technopedia',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6,
        },
        {
            url: 'https://acme.com/innovision_5.0',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6,
        },
        {
            url: 'https://acme.com/code_kalpana',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6,
        },
        {
            url: 'https://acme.com/arcade_arena/bgmi',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://acme.com/arcade_arena/tekken_7',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://acme.com/arcade_arena/stumble_guys',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: 'https://acme.com/arcade_arena/valorant',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ]
}