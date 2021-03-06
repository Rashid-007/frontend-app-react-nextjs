import React from 'react';
import { withRouter } from 'next/router'
import Layout from '../components/layout'

type PostProps = {
  router?: any
}

const Post: React.FunctionComponent<PostProps> = ({ router }) => {
  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  )
}
export default withRouter(Post)