import { ReactNode } from "react"
import Base from "./base"


interface Props {
    title: string;
    children: ReactNode;
}

export default function Content({title, children}: Props) {
    return (
        <div className="mt-4 mx-[10%]">
            <h2 className="text-3xl text-center">{title}</h2>
            {children}
        </div>
    )
}
