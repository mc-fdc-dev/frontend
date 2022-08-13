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

export default function BlogContent({meta, children}, Props) {
    return (
        <Content title={meta.title}>
            {children}
        </Content>
    )
}
