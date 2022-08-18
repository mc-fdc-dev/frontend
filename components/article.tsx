import Content from "./content"
import Image from "next/image"
import { ReactNode } from "react"


interface MetaT {
    title: string;
    description: string;
    author: string;
    time: string;
}

interface Props {
    meta: MetaT;
    children: ReactNode;
}

export default function Article({meta, children}: Props) {
    return (
        <div className="mt-4 mx-[10%] pb-8">
            <h2 className="text-5xl text-left font-semibold py-2">{meta.title}</h2>
            <div className="flex">
                <div className="flex py-2">
                    <Image className="rounded-full" src={`/images/staff/${meta.author}.webp`} alt={meta.author} width={45} height={45} />
                    <p className="py-[2.5px]">{meta.author}</p>
                </div>
                <p className="text-right">{meta.time}</p>
            </div>
            <article className="prose pt-8">
                {children}
            </article>
        </div>
    )
}
