import { css } from '@emotion/core';

import { fontFamilies, fontSizes } from "./font.style";
import { colors } from "./color.style";

const globalStyle = css({
    "*": {
        fontFamily: `"${fontFamilies.Roboto}", -apple-system, BlinkMacSystemFont, "Ubuntu", "Helvetica Neue", sans-serif`,

        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",    
    },
    body: {
        margin: 0,
        padding: 0,
        overflowX: "hidden",
        background: colors.white.hex,
        color: colors.black.hex,
    
        a: {
          color: colors.linkBlue.hex,
          textDecoration: "none",
          fontWeight: 500,
          fontStyle: "normal",
          ":hover": {
            textDecoration: "underline",
          },
        },
      },
      h1: {
        fontSize: fontSizes.XL,
        color: colors.headlineGrey.hex,
      },
      h2: {
        fontSize: fontSizes.L,
        color: colors.headlineGrey.hex,
      },
      "Roboto Light": {
        "@font-face": {
          fontFamily: `"${fontFamilies.Roboto}"`,
          src: `local('Roboto Light'),
                local('Roboto-Light'),
                url('/static/fonts/roboto-light.woff2') format('woff2')`,
          fontStyle: "normal",
          fontWeight: 300,
        },
      },  
      "Roboto Regular": {
        "@font-face": {
          fontFamily: `"${fontFamilies.Roboto}"`,
          src: `local('Roboto'),
                local('Roboto-Regular'),
                url('/static/fonts/roboto-regular.woff2') format('woff2')`,
          fontStyle: "normal",
          fontWeight: 400,
        },
      },
      "Roboto Medium": {
        "@font-face": {
          fontFamily: `"${fontFamilies.Roboto}"`,
          src: `local('Roboto Medium'),
                local('Roboto-Medium'),
                url('/static/fonts/roboto-medium.woff2') format('woff2')`,
          fontStyle: "normal",
          fontWeight: 500,
        },
      },
      "Roboto Bold": {
        "@font-face": {
          fontFamily: `"${fontFamilies.Roboto}"`,
          src: `local('Roboto Bold'),
                local('Roboto-Bold'),
                url('/static/fonts/roboto-bold.woff2') format('woff2')`,
          fontStyle: "normal",
          fontWeight: 700,
        },
      },                      
});
export { globalStyle };