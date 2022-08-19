import { promises as fs } from 'fs'

export async function getStaticProps() {
    const files = await fs.readdir("./").filter(file => {
        return file.isFile() && file.name.endsWith(".md")
    }).map(async file => {
        let article = require(`./${file.name}`)
        return article.meta
    })
}
