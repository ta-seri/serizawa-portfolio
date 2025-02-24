import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="芹澤龍生のポートフォリオサイト。経歴、技術スタック、アウトプットを紹介。" />
        <meta name="keywords" content="芹澤龍生,せり,Tatsuki Serizawa,ポートフォリオ,エンジニア" />
        <meta name="author" content="芹澤龍生" />
        <meta property="og:title" content="芹澤龍生 | ポートフォリオ" />
        <meta property="og:description" content="芹澤龍生のポートフォリオサイト。経歴、技術スタック、アウトプットを紹介。" />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}