import { promises as fs } from 'fs'
import Content from "../../components/content"

export async function getStaticProps() {
    var files = await fs.readdir("./")
    files = files.filter(file => {
        return file.isFile() && file.name.endsWith(".md")
    })
    const articles = files.map(async file => {
        let article = require(`./${file.name}`)
        return article.meta
    })
    return {
        props: {
            articles: articles
        }
    }
}

export default function Index({ articles }) {
    return (
        <Content title="記事一覧">
            {articles.map(article => (
                <p key={article.title}>{article.title}</p>
            ))}
        </Content>
    )
}
