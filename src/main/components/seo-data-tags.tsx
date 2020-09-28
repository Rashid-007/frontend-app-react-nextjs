import React from "react";
import  Head from "next/head";
import { useRouter } from "next/router";
import { WithTranslation } from 'react-i18next';

import { getSiteUrl } from "../utils/config/site-url.helper";
import { withTranslation, mapLanguageToLocaleSubpaths } from '../i18n/i18n'


type TSeoMeta = {
  name: string,
  content: string,
}

interface ISeoRobots {
    index: boolean;
    follow: boolean;
  }
  
interface IProps extends Partial<WithTranslation>{ 
    title?: string;
    language?: string;
    description?: string;
    robots?: ISeoRobots;
    schema: ISeoSchema;
    meta?: TSeoMeta[];
    canonical?: string;
  }

  interface ISeoSchema {
    organization: {
      brand?: {
        aggregateRating?: {
          ratingValue: number;
          reviewCount: number;
        };
      };
    };
    webPage: {
      breadcrumb?: {
        itemListElement: Array<{
          position: number;
          name: string;
          item: string;
        }>;
      };
    };
    blogPost?: {
      articleBody: string;
      datePublished: string;
      dateModified: string;
      image: string;
    };
  }

  interface ISeoSchemaDefaultValues {
    organization: {
      name: string;
      url: string;
      brand: {
        logo: string;
      };
    };
    webSite: {
      name: string;
      url: string;
    };
    webPage: {
      name: string;
      url: string;
      inLanguage: string;
    };
    blogPost: {
      headline: string;
      url: string;
      author: string;
      publisher: {
        name: string;
        logo: {
          name: string;
          width: number;
          height: number;
          url: string;
        };
      };
    };
  }  
  
const SEO: React.FunctionComponent<IProps> = (props) => {
    const {
        title,
        // language = `en`, // todo: replace default value with multi language support in ICWT-19
        description,
        robots = { index: true, follow: true },
        schema,
        meta = [],
        canonical,
      } = props;
      const { language } = props.i18n;

      const titleTemplate = "%s | Shop Europe";
      const schemaDefaults = {
        organization: {
          name: "Shop Europe",
        },
        webSite: {
          name: "Shop Europe",
        },
        blogPost: {
          author: "Shop Europe",
          publisher: {
            name: "Shop Europe",
          },
        },
      };
      const robotsAsString = getRobots(robots);
      const metaWithDefaults = getMeta(meta, description, robotsAsString);

      const schemaDefaultValues = getSchemaDefaultValues(schemaDefaults, title, titleTemplate, language);

      const schemaOrganization = getSchemaOrganization(schema, schemaDefaultValues);
      const schemaWebSite = getSchemaWebSite(schema, schemaDefaultValues);
      const schemaWebPage = getSchemaWebPage(schema, schemaDefaultValues);
      const schemaBlogPost = getSchemaBlogPost(schema, schemaDefaultValues); 
      
      return (
        // This component injects elements into the <head> of the html page
        <Head> 
          <title>{titleTemplate.replace("%s", title)}</title>
          {canonical ? <link rel="canonical" href={getFullCanonicalUrl(canonical)} /> : null}
          {metaWithDefaults.map((metaTag) => (
        <meta key={`meta-${metaTag.name}`} name={metaTag.name} content={metaTag.content} />
      ))}

          {schemaOrganization}
          {schemaWebSite}
          {schemaWebPage}
          {schemaBlogPost}
          </Head>
      )
}

function getRobots(robots: ISeoRobots) {
    const robotsIndex = robots.index ? "index" : "noindex";
    const robotsFollow = robots.follow ? "follow" : "nofollow";
  
    return `${robotsIndex},${robotsFollow}`;
}

function getMeta(meta: TSeoMeta[], description: string, robots: string) {
    const metaWithDefaults: TSeoMeta[] = [
      {
        name: `description`,
        content: description,
      },
      {
        name: `robots`,
        content: robots,
      },
    ];
  
    metaWithDefaults.concat(meta);
  
    return metaWithDefaults;
  }

  function getSchemaDefaultValues(schemaDefaults: any, title: string, titleTemplate: string, language: string): ISeoSchemaDefaultValues {
    const router = useRouter() || { pathname: "/" };
  
    const compleatTitle = String(titleTemplate).replace("%s", title);
    const siteUrl = getSiteUrl();
    const localeSubpaths = mapLanguageToLocaleSubpaths(language);

  
    return {
      organization: {
        name: schemaDefaults.organization.name,
        url: `${siteUrl}/${localeSubpaths}`, // todo: add language as subdirectory with ICWT-19
        brand: {
          logo: `${siteUrl}/static/logo/logo-schema-org.png`,
        },
      },
      webSite: {
        name: schemaDefaults.webSite.name,
        url: `${siteUrl}/${localeSubpaths}`, // todo: add language as subdirectory with ICWT-19
      },
      webPage: {
        name: compleatTitle,
        url: `${siteUrl}${router.pathname}`,
        inLanguage: language, // todo: add language with ICWT-19
      },
      blogPost: {
        headline: title,
        url: `${siteUrl}${router.pathname}`,
        author: schemaDefaults.blogPost.author,
        publisher: {
          name: schemaDefaults.blogPost.publisher.name,
          logo: {
            name: "logo",
            width: 800,
            height: 166,
            url: `${siteUrl}/static/logo/logo-schema-org.png`,
          },
        },
      },
    };
  }

  function getSchemaOrganization(schema: ISeoSchema, schemaDefaultValues: ISeoSchemaDefaultValues) {
    if (!schema || !schema.organization) {
      return null;
    }
  
    const ld = {
      "@context": "http://schema.org",
      "@type": "Organization",
      name: schemaDefaultValues.organization.name,
      url: schemaDefaultValues.organization.url,
      brand: schema.organization.brand
        ? {
            "@type": "Brand",
            logo: schemaDefaultValues.organization.brand.logo,
            aggregateRating:
              schema.organization.brand && schema.organization.brand.aggregateRating
                ? {
                    "@type": "AggregateRating",
                    ratingValue: schema.organization.brand.aggregateRating.ratingValue,
                    reviewCount: schema.organization.brand.aggregateRating.reviewCount,
                  }
                : undefined,
          }
        : undefined,
    };
  
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}></script>;
  }

  function getSchemaWebSite(schema: ISeoSchema, schemaDefaultValues: ISeoSchemaDefaultValues) {
    const ld = {
      "@context": "http://schema.org",
      "@type": "WebSite",
      name: schemaDefaultValues.webSite.name,
      url: schemaDefaultValues.webSite.url,
    };
  
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}></script>;
  }
  
  function getSchemaWebPage(schema: ISeoSchema, schemaDefaultValues: ISeoSchemaDefaultValues) {
    if (!schema || !schema.webPage) {
      return null;
    }
  
    const ld = {
      "@context": "http://schema.org",
      "@type": "WebPage",
      name: schemaDefaultValues.webPage.name,
      url: schemaDefaultValues.webPage.url,
      inLanguage: schemaDefaultValues.webPage.inLanguage,
      breadcrumb: schema.webPage.breadcrumb
        ? {
            "@type": "BreadcrumbList",
            itemListElement: [
              schema.webPage.breadcrumb.itemListElement.map((item) => ({ "@type": "ListItem", ...item })),
            ],
          }
        : undefined,
    };
  
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}></script>;
  }
  function getSchemaBlogPost(schema: ISeoSchema, schemaDefaultValues: ISeoSchemaDefaultValues) {
    if (!schema || !schema.blogPost) {
      return null;
    }
  
    const ld = {
      "@context": "http://schema.org",
      "@type": "BlogPosting",
      headline: schemaDefaultValues.blogPost.headline,
      articleBody: schema.blogPost.articleBody,
      url: schemaDefaultValues.blogPost.url,
      author: schemaDefaultValues.blogPost.author,
      publisher: {
        "@type": "Organization",
        name: schemaDefaultValues.blogPost.publisher.name,
        logo: {
          "@type": "ImageObject",
          name: "logo",
          width: schemaDefaultValues.blogPost.publisher.logo.width,
          height: schemaDefaultValues.blogPost.publisher.logo.height,
          url: schemaDefaultValues.blogPost.publisher.logo.url,
        },
      },
      datePublished: schema.blogPost.datePublished,
      dateModified: schema.blogPost.dateModified,
      image: schema.blogPost.image,
    };
  
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}></script>;
  }
  
    

  function getFullCanonicalUrl(canonical: string) {
    if (!canonical || canonical.startsWith("http://") || canonical.startsWith("https://")) {
      return canonical;
    }
  
    const prefix = `${!canonical.startsWith("/") ? "/" : ""}`;
    return `${prefix}${canonical}`;
  }
  
  export default withTranslation() (SEO);
  
  
  
  
  