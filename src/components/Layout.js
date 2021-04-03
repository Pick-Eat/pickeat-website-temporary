import React from 'react';
import { get } from 'lodash';
import CookieConsent from 'react-cookie-consent';

import '../sass/main.scss';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO/SEO';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                
                <SEO
                    title={get(this.props, 'pageContext.frontmatter.title', null)}
                    description={get(this.props, 'pageContext.frontmatter.description', null)}
                    image={get(this.props, 'pageContext.frontmatter.image', null)}
                    url={get(this.props, 'pageContext.frontmatter.url', null)}
                />
                
                <div id="page" className={'site palette-' + get(this.props, 'pageContext.site.siteMetadata.palette', null)}>
                    <Header {...this.props} />
                    <main id="content" className="site-content">
                        {this.props.children}
                    </main>
                    <Footer {...this.props} />
                </div>

                <CookieConsent
                    location="bottom"
                    buttonText="Accetto"
                    enableDeclineButton
                    flipButtons
                    declineButtonText="Declino"
                    cookieName="gatsby-gdpr-google-analytics"
                    style={{ fontSize: "13px" }}>
                    Questo sito web memorizza i cookie sul tuo computer. Questi cookie vengono utilizzati per raccogliere informazioni su come interagite con il nostro sito web e ci permettono di ricordarti.
                    Utilizziamo queste informazioni per migliorare e personalizzare la vostra esperienza di navigazione e per analisi e metriche sui nostri visitatori di questo sito web.
                    Se rifiuti, le vostre informazioni non saranno tracciate quando visitate il mio sito web. Un singolo cookie verrà utilizzato nel vostro browser per ricordare la vostra preferenza di non essere tracciati :)
                </CookieConsent>
            </React.Fragment>
        );
    }
}
