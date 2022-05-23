import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css" />
        {/* <script src="https://code.highcharts.com/maps/modules/exporting.js"></script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>
      </body>
    </Html>
  )
}