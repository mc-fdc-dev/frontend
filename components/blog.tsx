import Content from "./content"
import { ReactNode } from "react"


type MetaT {
    title: string;
    description: string;
    author: string;
}

interface Props {
    meta: MetaT;
    children: ReactNode;
}

export default function BlogContent({meta, children}, Props) {
}
