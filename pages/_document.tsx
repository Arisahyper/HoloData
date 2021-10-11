import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <meta name="description" content="ホロライブの総合情報閲覧サイト" />
          <meta property="og:title" content="HoloData" />
          <meta
            property="og:description"
            content="ホロライブの総合情報閲覧サイト"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://holo-tube.vercel.app/" />
          <meta property="og:image" content="https://media.discordapp.net/attachments/807948416147390545/897056504094535710/holodata.png?width=1220&height=686"  />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="HoloData" />
          <meta
            name="twitter:description"
            content="ホロライブの総合情報閲覧サイト"
          />
          <meta name="twitter:image" content="https://media.discordapp.net/attachments/807948416147390545/897056504094535710/holodata.png?width=1220&height=686" />
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
