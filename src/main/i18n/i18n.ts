import NextI18Next from "next-i18next";
import { Namespace, WithTranslation, initReactI18next } from "react-i18next";

const languages = ["en-US", "nl-NL"]; // first language is default language
const defaultNS = "common";

const localeSubpaths = {
  "en-US": "en",
  "nl-NL": "nl",
}


const nextI18next = new NextI18Next ({
    strictMode: true,
    debug: false,

    serverLanguageDetection: true,
    browserLanguageDetection: true,
    
    detection: {
        lookupCookie: "language",
        order: ["path", "cookie", "header"],
        caches: ["cookie"],
      },
      defaultNS,
      defaultLanguage: languages[0],
      otherLanguages: languages.filter((lang, index) => index > 0),

      localeSubpaths,

      localePath: "./src/main/static/locale",
      localeStructure: "{{lng}}/{{ns}}",
      ignoreRoutes: ["/_next/", "/static/"],
      
      use: [initReactI18next], // we pass the i18n instance to react-i18next which will make it available for all the components via the context api.
});

nextI18next.i18n.languages = languages;

/**
 * Overwrite typings of withTranslation, because `P extends WithTranslation` have to
 * be `P extends Partial<WithTranslation>`. If it is not `Partial<WithTranslation>`, the `Component.getInitialProps()` return type is all props of the component plus `WithTranslation`
 * values, but the values of `WithTranslation` are not passed to `Component.getInitialProps()`.
 *
 * This might be fixed in a next-i18next version > 1.2.1
 */


export const withTranslation = nextI18next.withTranslation as (
    ns?: Namespace,
    options?: {
      withRef?: boolean;
    }
  ) => <P extends Partial<WithTranslation>>(
    component: React.ComponentType<P>
  ) => React.ComponentType<Omit<P, keyof WithTranslation>>;

  const mapLanguageToLocaleSubpaths = (language: string): string => {
    return localeSubpaths[language] || localeSubpaths[languages[0]];
  };
  
  
  export default nextI18next;
  export const { appWithTranslation, Link, Router } = nextI18next;
  export { languages, defaultNS, mapLanguageToLocaleSubpaths }
  
