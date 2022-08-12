import { ReactNode } from "react"


interface Props {
    title: string;
    children: ReactNode;
}

export default function Content({title, children}: Props) {
    return (
        <div className="mt-4 mx-[10%] pb-8">
            <h2 className="text-3xl text-center font-bold">{title}</h2>
            {children}
        </div>
    )
}
