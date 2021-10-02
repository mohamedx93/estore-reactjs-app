import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head >
                    <meta charset="utf-8" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <meta
                        name="description"
                        content="Web site created using create-react-app"
                    />
                    <link rel="apple-touch-icon" href="/logo192.png" />

                    <link rel="manifest" href="/manifest.json" />


                    {/* <!-- Google fonts --> */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Oswald&family=Permanent+Marker&display=swap"
                        rel="stylesheet"
                    />
                    {/* <!-- Font Awesome --> */}
                    
                    <title>Ecommerce ReactJS App</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script
                        src="https://kit.fontawesome.com/031ae43889.js"
                        crossorigin="anonymous"
                    ></script>
                </body>
            </Html>
        )
    }
}