import { ReactNode } from "react"
import Base from "./base"


interface Props {
    children: ReactNode;
}

export default function Content({children}: Props) {
    return (
        <Base>
            <div className="mt-4 mx-[10%]">
                {children}
            </div>
        </Base>
    )
}