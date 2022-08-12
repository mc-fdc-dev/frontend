import Content from "../components/content"
import { promises } from "fs"


export async function getStaticProps() {
    await promises.readdir("../../articles")
    return {
        props: {
            posts: []
        }
    }
}

export default function Main({ posts }) {
    return (
        <Content title="記事一覧">
            <p>hello</p>
        </Content>
    )
}
