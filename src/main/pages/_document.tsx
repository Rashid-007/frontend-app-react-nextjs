// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";

import Manifest from '../components/head/manifest';
import Favicon from '../components/head/favicon';

class MyDocument extends Document {
  public static async getInitialProps(ctx: DocumentContext):Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    if (ctx.query.amp) {
      const { html, styles } = this.extractEmotionCssForAmp(initialProps.html);
      initialProps.html = html;
      initialProps.styles = styles;
    }
    return { ...initialProps };
  }

  /**
   * Emotion inserts the <style> tags next to the React component (DOM element), which uses the CSS code.
   * The AMP specification forces you to use a <style amp-custom=""> tag, which have to be placed inside
   * of the <head> element. This is not supported by Emotion.
   *
   * This method extracts all <style> tags in the <body> and merge the content together into one
   * <style amp-custom=""> tag inside of <head> (via styles initialProps).
   *
   * See: https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml#stylesheets
   *
   * @param {string} html of the page
   * @return {string} HTML of the page
   */
  public static extractEmotionCssForAmp(html: string) {
    const stylesHtmlStrings = html.match(/(<style([^>]+)>)([^>]+)(<\/style>)/gm);
    let stylesString = ``;
    for (const styleHtmlString of stylesHtmlStrings) {
      stylesString += styleHtmlString
        .replace(/<style([^>]+)>/, "")
        .replace(/<\/style>/, "")
        .replace(/\/\*([^>]+)\*\//, "");
    }

    const styles = [
      React.createElement("<style>", {
        dangerouslySetInnerHTML: {
          __html: stylesString,
        },
      }),
    ];

    const htmlWithoutStyles = html.replace(/(<style([^>]+)>)([^>]+)(<\/style>)/gm, "");

    return {
      html: htmlWithoutStyles,
      styles,
    };
  }


  public render() {
    return (
      // All of <Html>, <Head />, <Main /> and <NextScript /> are required for page to be properly rendered.
      <Html lang={this.props.__NEXT_DATA__.props.initialLanguage}>
        <Head>
          <Favicon />
          <Manifest />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

// _document is the name adopted by nextjs
