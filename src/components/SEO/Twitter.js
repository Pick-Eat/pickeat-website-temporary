import React from 'react';
import Helmet from 'react-helmet';

export default ({
    cardType = 'summary_large_image',
    username = null,
    url = null,
    title = null,
    description = null,
    image = null,
}) => (
        <Helmet>
            <meta name="twitter:card" content={cardType} />
            {username && <meta name="twitter:creator" content={username} />}
            {url && <meta property="twitter:url" content="https://www.linkedin.com/company/pick-eat2020/" />}
            {title && <meta name="twitter:title" content={title} />}
            {description && <meta name="twitter:description" content={description} />}
            {image && <meta name="twitter:image" content={image} />}
        </Helmet>
    );