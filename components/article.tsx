import Content from "./content"
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
            <article className="prose">
                {children}
            </article>
        </Content>
    )
}
