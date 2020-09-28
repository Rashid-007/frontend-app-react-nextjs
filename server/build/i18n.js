"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_i18next_1 = __importDefault(require("next-i18next"));
const languages = ["en-US", "nl-NL"]; // first language is default language
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
    defaultNS: "common",
    defaultLanguage: languages[0],
    otherLanguages: languages.filter((lang, index) => index > 0),
    localeSubpaths: {
        "en-US": "en",
        "nl-NL": "nl",
    },
    localePath: "static/locale",
    localeStructure: "{{lng}}/{{ns}}",
    ignoreRoutes: ["/_next/", "/static/"],
    use: [],
});
nextI18next.i18n.languages = languages;
exports.withTranslation = nextI18next.withTranslation;
exports.default = nextI18next;
exports.appWithTranslation = nextI18next.appWithTranslation, exports.Link = nextI18next.Link, exports.Router = nextI18next.Router;
