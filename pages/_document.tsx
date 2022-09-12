import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/logo.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.5.2/dist/flowbite.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="https://unpkg.com/flowbite@1.5.2/dist/flowbite.js" />
      </body>
    </Html>
  );
}
