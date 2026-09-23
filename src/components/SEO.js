import { Helmet } from 'react-helmet-async';

export const SITE_URL = 'https://raydelv.tech';
export const SITE_NAME = 'Ray Del Vecchio';
export const TWITTER_HANDLE = '@raydelvecc';
export const OG_IMAGE = `${SITE_URL}/og-image.png`;
export const SITE_DESCRIPTION = '24-year-old software engineer, co-founder at Cerebral Valley. Experienced in AI, full-stack development, and research. Based in SF/NYC.';

export const SOCIAL_PROFILES = [
    'https://x.com/raydelvecc',
    'https://linkedin.com/in/raymond-del-vecchio',
    'https://github.com/raydelvecchio',
];

export const PERSON_SCHEMA = {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Ray Del Vecchio',
    alternateName: 'Raymond Del Vecchio',
    givenName: 'Raymond',
    familyName: 'Del Vecchio',
    url: SITE_URL,
    image: OG_IMAGE,
    description: SITE_DESCRIPTION,
    worksFor: {
        '@type': 'Organization',
        name: 'Cerebral Valley',
        url: 'https://cerebralvalley.ai',
    },
    alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Brown University',
        url: 'https://brown.edu',
    },
    birthPlace: {
        '@type': 'Place',
        name: 'Clifton, Virginia',
    },
    homeLocation: [
        { '@type': 'Place', name: 'San Francisco, California' },
        { '@type': 'Place', name: 'New York City, New York' },
    ],
    sameAs: SOCIAL_PROFILES,
};

const WEBSITE_SCHEMA = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: 'en-US',
    publisher: { '@id': `${SITE_URL}/#person` },
};

const breadcrumbSchema = (title, path) => ({
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        ...(path ? [{ '@type': 'ListItem', position: 2, name: title, item: `${SITE_URL}${path}` }] : []),
    ],
});

const SEO = ({ title, description, path = '', type = 'website', pageSchema }) => {
    const fullUrl = `${SITE_URL}${path}`;
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

    const graph = [
        PERSON_SCHEMA,
        WEBSITE_SCHEMA,
        breadcrumbSchema(title, path),
        ...(pageSchema ? [pageSchema] : []),
    ];

    const jsonLd = { '@context': 'https://schema.org', '@graph': graph };

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="author" content={SITE_NAME} />
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <link rel="canonical" href={fullUrl} />

            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={OG_IMAGE} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Ray Del Vecchio" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={TWITTER_HANDLE} />
            <meta name="twitter:creator" content={TWITTER_HANDLE} />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={OG_IMAGE} />
            <meta name="twitter:image:alt" content="Ray Del Vecchio" />

            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>
    );
};

export default SEO;
