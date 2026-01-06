import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mdevsites.pl'

    // Main pages
    const routes = [
        '',
        '/portfolio',
        '/pricing',
        '/contact',
        '/privacy-policy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Specific demo pages 
    const demos = [
        '/demos/salon-beauty',
        '/demos/mechanik',
        '/demos/nieruchomosci',
        '/demos/fotograf',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [...routes, ...demos]
}
