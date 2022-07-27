import Head from 'next/head'
import Nav from './nav'
import { ReactNode } from "react"
import Link from 'next/link'
import Script from 'next/script'
import Footer from './footer'


interface Props {
    children: ReactNode;
}

export default function Base({children}: Props) {
    return (
        <>
            <Head>
                <title>mc-fdc-dev公式サイト</title>
                <meta property='og:title' content='mc-fdc-dev公式サイト' />
                <meta property='og:description' content='mc-fdc-devはapiやbotを提供します。' />
                <meta property='og:type' content='website' />
                <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8715826596324259" />
            </Head>
            <div className="border-b-4 border-pink-300">
                <div className="flex mx-8 justify-between my-2 items-center">
                    <Link href="/"><a><h1 className='text-4xl'>mc-fdc-dev</h1></a></Link>
                    <Nav />
                </div>
            </div>
            <main>{children}</main>
            <Footer />
        </>
    )
}
