"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_i18next_1 = __importDefault(require("next-i18next"));
const languages = ["en-US", "nl-NL"]; // first language is default language
exports.languages = languages;
const defaultNS = "common";
exports.defaultNS = defaultNS;
const nextI18next = new next_i18next_1.default({
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
    localeSubpaths: {
        "en-US": "en",
        "nl-NL": "nl",
    },
    localePath: "./src/main/static/locale",
    localeStructure: "{{lng}}/{{ns}}",
    ignoreRoutes: ["/_next/", "/static/"],
    use: [],
});
nextI18next.i18n.languages = languages;
/**
 * Overwrite typings of withTranslation, because `P extends WithTranslation` have to
 * be `P extends Partial<WithTranslation>`. If it is not `Partial<WithTranslation>`, the `Component.getInitialProps()` return type is all props of the component plus `WithTranslation`
 * values, but the values of `WithTranslation` are not passed to `Component.getInitialProps()`.
 *
 * This might be fixed in a next-i18next version > 1.2.1
 */
exports.withTranslation = nextI18next.withTranslation;
exports.default = nextI18next;
exports.appWithTranslation = nextI18next.appWithTranslation, exports.Link = nextI18next.Link, exports.Router = nextI18next.Router;
