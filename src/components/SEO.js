import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, path = '' }) => {
    const siteUrl = 'https://raydelv.tech';
    const fullUrl = `${siteUrl}${path}`;
    const fullTitle = title ? `${title} | Ray Del Vecchio` : 'Ray Del Vecchio';

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullUrl} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />

            <meta property="twitter:card" content="summary" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
        </Helmet>
    );
};

export default SEO;
