import React from 'react';
import { NextPage, PageConfig } from 'next';
import Layout from '../components/layout';
import { observer } from 'mobx-react';
import { useStores } from '../hook';
import SEO from '../components/seo-data-tags';

import { WithTranslation } from 'react-i18next';
import { withTranslation } from '../i18n/i18n'

interface INextPageProps extends Partial<WithTranslation> {
  namespacesRequired?: string[];
}

interface IProps extends INextPageProps {

}

export const config: PageConfig = { amp: "hybrid"};

const Index: NextPage<IProps> = observer((props) => {
  const { t } = props;
  const title = t("index.title");

  const { browserStore } = useStores();
  const { height, width } = browserStore.window;

  return (
    <Layout title="Home">
      <SEO
      title={title}
      language="de"
      description="Another awesome Next website."
      robots={{
        index: true,
        follow: true,
      }}
      schema={{
        organization: {
          brand: {
            aggregateRating: {
              ratingValue: 5,
              reviewCount: 10,
            },
          },
        },
        webPage: {
          breadcrumb: {
            itemListElement: [
              {
                position: 1,
                name: "Awesome 1",
                item: "http://1",
              },
              {
                position: 2,
                name: "Better 2",
                item: "http://2",
              },
            ],
          },
        },
        blogPost: {
          articleBody: "Awesome text...",
          datePublished: "2019-01-01",
          dateModified: "2019-03-04",
          image: "https://picsum.photos/id/475/536/354",
        },
      }}

      />
      <h1>{t("index.hi")} 👋</h1>

      <h2>Hello world! APP_ENV: {process.env.APP_ENV} and cms-port: {process.env.CMS_HOST_PORT}</h2>

      <p>{t("index.browser-dimensions.headline")}</p>
      <ul>
      <li>
          {t("index.browser-dimensions.height")} {height}
        </li>
        <li>
          {t("index.browser-dimensions.width")} {width}
        </li>

      </ul>

    </Layout>
  )
});

Index.getInitialProps = async () => {
  return {
    namespacesRequired: ["common", "examples"],
  };
};

export default withTranslation("examples")(Index);