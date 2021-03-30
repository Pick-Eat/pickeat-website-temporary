const siteMetadata = require('./site-metadata.json')

module.exports = {
    pathPrefix: '/',
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-advanced-sitemap`,
        `gatsby-plugin-offline`,

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {}
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {}
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
            }
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                // Setting a color is optional.
                color: `blue`,
                // Disable the loading spinner.
                showSpinner: true,
            },
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Nunito Sans:400,400i,700,700i']
                }
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `PickEat`,
                short_name: `PickEat`,
                start_url: `/`,
                background_color: `#fefefe`,
                theme_color: `#ff0000`,
                display: `standalone`,
                icon: `static/icon.png`,
                icon_options: {
                    // For all the options available, please see the additional resources below.
                    purpose: `any maskable`,
                },
            },
        },
    ]
};
