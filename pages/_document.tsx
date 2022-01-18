import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   // This will apply to all pages
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html>
        <Head>{/* favicon, links, styles */}</Head>
        <body className="my-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
