export default function StructuredData() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'M.DEV',
        description: 'Tworzenie nowoczesnych stron internetowych dla firm',
        url: 'https://www.mdevsites.pl',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'PL',
        },
        priceRange: '$$',
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                ],
                opens: '09:00',
                closes: '17:00',
            },
        ],
        sameAs: [
            'https://github.com/mdevsites',
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
