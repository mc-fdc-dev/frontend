import Content from "./content"
import Image from "next/image"
import { ReactNode } from "react"


interface MetaT {
    title: string;
    description: string;
    author: string;
}

interface Props {
    meta: MetaT;
    children: ReactNode;
}

export default function Article({meta, children}: Props) {
    return (
        <Content title={meta.title}>
            <div>
                <Image className="rounded-full" src={`/images/staff/${meta.author}.webp`} alt={meta.author} width={30} height={30} />
                <p>作成者: {meta.author}</p>
            </div>
            <article className="prose">
                {children}
            </article>
        </Content>
    )
}
