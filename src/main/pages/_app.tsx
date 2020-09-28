import App from "next/app";
import { appWithTranslation } from '../i18n/i18n'

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default appWithTranslation(MyApp);
