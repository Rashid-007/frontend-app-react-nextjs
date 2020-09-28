import React, { Fragment } from "react";
import { NextPage } from 'next';
import { TFunction } from 'i18next';
import { WithTranslation } from 'react-i18next';

import SEO from "../components/seo-data-tags";
import Layout from "../components/layout";
import { withTranslation } from '../i18n/i18n'

/** test without Partial */
interface IProps extends Partial<WithTranslation> {
  statusCode: number;
}
  
const Error: NextPage<IProps> = (props) => {
    const { t, statusCode } = props;
    const title =
      statusCode === 400
        ? t("title.400")
        : statusCode === 403
        ? t("title.403")
        : statusCode === 404
        ? t("title.404")
        : t("title.500");
  
    return (
      <Layout>
        <SEO
          title={title}
          robots={{
            index: statusCode === 404 ? false : true,
            follow: true,
          }}
          schema={{
            organization: {},
            webPage: {},
          }}
        />
  
        {statusCode === 400
          ? renderError400(t)
          : statusCode === 403
          ? renderError403(t)
          : statusCode === 404
          ? renderError404(t)
          : renderError500(t)}
      </Layout>
    );
  };

  const renderError400 = (t: TFunction) => {
    return (
      <Fragment>
        <h1>{t("title.400")}</h1>
        <p>{t("description.400")}</p>
      </Fragment>
    );
  };
  
  const renderError403 = (t: TFunction) => {
    return (
      <Fragment>
        <h1>{t("title.403")}</h1>
        <p>{t("description.403")}</p>
      </Fragment>
    );
  };
  
  const renderError404 = (t: TFunction) => {
    return (
      <Fragment>
        <h1>{t("title.404")}</h1>
        <p>{t("description.404")}</p>
      </Fragment>
    );
  };
  
  const renderError500 = (t: TFunction) => {
    return (
      <Fragment>
        <h1>{t("title.500")}</h1>
        <p>{t("description.500")}</p>
      </Fragment>
    );
  };

Error.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;

  return {
    namespacesRequired: ["common", "page-error"],
    statusCode,
  };
};

export default withTranslation("page-error")(Error);

  
  