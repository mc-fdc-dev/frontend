import { useRouter } from 'next/router'
import Content from "../../../components/content"


export default function Main() {
    const router = useRouter()
    return (
        <Content title="ダッシュボード">
            <p>{router.query.guildid}</p>
        </Content>
    )
}
