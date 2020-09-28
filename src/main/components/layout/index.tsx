import React, { Fragment } from 'react';
import { css, Global } from "@emotion/core";
import { content, globalStyle } from "../../styles";
import Header from "./header";

// import Link from 'next/link';
// import Head from 'next/head';

interface ILayoutProps {
  title?: string
}

const style = {
  divBoxedLayout: () =>
    css({
      margin: `0 auto`,
      maxWidth: content.width,
      padding: `0px 1.5em 3.0em`,
    }),
};

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <Global styles={globalStyle}/>
  
      <Header siteTitle="SHOP"/>
      <div css={style.divBoxedLayout()}>
          <main>{children}</main>
          <footer>© {new Date().getFullYear()}</footer>
        </div>
  
    </Fragment>
  )
} 

export default Layout