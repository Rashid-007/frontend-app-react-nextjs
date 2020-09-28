import React from 'react';
import Layout from '../components/layout';
import { Link, withTranslation } from '../i18n/i18n';
import { WithTranslation } from 'next-i18next';
import { NextPage } from 'next';

type PostLinkProps = {
  title?: string
}

const PostLink: React.FunctionComponent<PostLinkProps> = ({ title }) => {
  return (
    <li>
      <Link href={`/post?title=${title}`}>
        <a>{title}</a>
      </Link>
    </li>
  )
}

interface INextPageProps extends Partial<WithTranslation> {
  namespacesRequired?: string[],
}
const About: NextPage<INextPageProps> = (props) => {
  const { t } = props;
  return (
    <Layout title="About">
      <h1>{t("about.title")} ✌</h1>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is awesome" />
      <PostLink title="Deploy apps with Zeit" />
    </Layout>
  )
}
About.getInitialProps = async () => {
  return {
    namespacesRequired: ["examples"]
  }
}
export default withTranslation("examples") (About);