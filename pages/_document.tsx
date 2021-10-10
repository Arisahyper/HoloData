import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <meta name="description" content="ホロライブの配信情報閲覧サイト" />
          <meta property="og:title" content="HoloTube" />
          <meta property="og:description" content="ホロライブの配信情報閲覧サイト" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://holo-tube.vercel.app/" />
          <meta
            property="og:image"
            content=""
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="HoloTube" />
          <meta name="twitter:description" content="ホロライブの配信情報閲覧サイト" />
          <meta
            name="twitter:image"
            content="public/images/PortfolioPage.png"
          />
          <meta name="twitter:site" content="@arisahyper" />
          <meta name="twitter:creator" content="@arisahyper" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
