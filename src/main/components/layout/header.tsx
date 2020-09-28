import React from 'react';
import { css } from '@emotion/core';
import { Link } from '../../i18n/i18n';
import { colors, content } from '../../styles';
import { isFeatureEnabled } from '../../utils/config/check-feature-toggle';

interface IProps {
    siteTitle: string;
  }

const style = {
    header: () => css({
            background: colors.paleBlue.hex,
        }),
    divBoxedLayout: () => css({
        margin: `0 auto`,
        maxWidth: content.width,
        height: content.header.height,
        padding: content.padding,
    }),
    h1: () => css({ margin: 0 }),

    link: () =>
    css({
      color: `white`,
      textDecoration: `none`,

      ":hover": {
        textDecoration: "none",
      },
    }),
}

const Header: React.FunctionComponent<IProps> = (props) => {
    const {siteTitle} = props;

    return (
        <header css={style.header}>
            <div css={style.divBoxedLayout()}>
                <h1 css={style.h1()}>
                <Link href="/">
                    <a css={style.link()}>{siteTitle}</a>
                </Link>
                </h1>
            </div>
            <nav>
                <Link href="/">
                <a>Home</a>
                </Link> {' '}
                {isFeatureEnabled("aboutPage") ? (
                   <> |       {' '}
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                    {' '}
                    |       {' '}
                    </>
                ) : null } 
            </nav>
        </header>
    )
}

export default Header;


