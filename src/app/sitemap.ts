import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://greenberg.engineering';
    const lastModified = new Date();

    const routes = [
        '',
        '/about',
        '/company',
        '/company/leadership',
        '/company/careers',
        '/infra-q',
        '/insights',
        '/resources/downloads',
        '/sectors',
        '/sectors/infrastructure',
        '/sectors/esg',
        '/sectors/systems',
        '/sectors/skills',
        '/sectors/safety',
        '/legal/privacy',
        '/legal/terms',
        '/legal/impressum',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : route.startsWith('/sectors') ? 0.8 : 0.6,
    }));
}
