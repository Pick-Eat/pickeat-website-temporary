import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import Twitter from './Twitter';
import Facebook from './Facebook';

const SEO = ({
  title = null,
  description = null,
  image = null,
  pathname = null,
  type = "website",
}) => (
    <StaticQuery
      query={graphql`
      query SEOQuery {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            defaultImage: image
            siteUrl
          }
        }
      }      
    `}
      render={({
        site: {
          siteMetadata: {
            defaultTitle,
            titleTemplate,
            defaultDescription,
            siteUrl,
            defaultImage,
          },
        },
      }) => {
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          image: `${siteUrl}${image || defaultImage}`,
          url: `${siteUrl}${pathname || '/'}`,
        };

        return (
          <>
            <Helmet title={seo.title} titleTemplate={titleTemplate}>
              <meta name="description" content={seo.description} />
              <meta name="image" content={seo.image} />
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="google" content="notranslate" />
              <meta name="author" content="PickEat Team" />
            </Helmet>
            <Facebook
              type={type}
              title={seo.title}
              description={seo.description}
              image={seo.image}
            />
            <Twitter
              title={seo.title}
              description={seo.description}
              image={seo.image}
            />
          </>
        );
      }}
    />
  );

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
};

export default SEO;