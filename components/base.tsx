import Head from 'next/head'
import Nav from './nav'
import { ReactNode } from "react";


interface Props {
    children: ReactNode;
}

export default function Base({children}: Props) {
    return (
        <>
            <Head>
                <title>mc-fdc-dev公式サイト</title>
            </Head>
            <div className="border-b-4 border-pink-300">
                <div className="flex mx-8 justify-between my-2 items-center">
                    <h1 className='text-4xl'>mc-fdc-dev</h1>
                    <Nav />
                </div>
            </div>
            <main>{children}</main>
        </>
    )
}