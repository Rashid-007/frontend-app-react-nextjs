import React, { Fragment } from "react";
import { colors } from "../../styles";

interface IProps {}

const Manifest: React.FunctionComponent<IProps> = (props) => {
    const name = "Shop";
    const themeColor = colors.paleBlue.hex;
    return (
        <Fragment>
            <link rel ="manifest" href="/static/manifest.json"></link>

            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="application-name" content={name} />
            <meta name="apple-mobile-web-app-title" content={name} />
            <meta name="theme-color" content={themeColor} />
            <meta name="msapplication-navbutton-color" content={themeColor} />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="msapplication-starturl" content="/" />
            

            <link rel="icon" type="image/png" sizes="192x192" href="/static/images/logo/icon-192x192.png" />
            <link rel="apple-touch-icon" sizes="48x48" href="/static/images/logo/icon-48x48.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/static/images/logo/icon-72x72.png?" />
            <link rel="apple-touch-icon" sizes="96x96" href="/static/images/logo/icon-96x96.png?" />
            <link rel="apple-touch-icon" sizes="144x144" href="/static/images/logo/icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="192x192" href="/static/images/logo/icon-192x192.png" />
            <link rel="apple-touch-icon" sizes="256x256" href="/static/images/logo/icon-256x256.png" />
            <link rel="apple-touch-icon" sizes="384x384" href="/static/images/logo/icon-384x384.png" />
            <link rel="apple-touch-icon" sizes="512x512" href="/static/images/logo/icon-512x512.png" />
        </Fragment>
        );
}

export default Manifest;

// removed:? <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
