import useSWR, { Fetcher } from 'swr'
import Image from 'next/image'
import Content from "../../components/content"
import DataT from "../../interfaces/dashboard/data"


async function fetcher(apiURL: string): Promise<DataT> {
    const res = await fetch(apiURL, {
        credentials: 'include'
    })
    return res.json()
}

function User() {
    const { data } = useSWR("https://api.mc-fdc.com/dashboard/me", fetcher)
    if (!data) return <p>Loading</p>
    if (!data.status) {
        return <a className="text-lg rounded bg-[#5865F2] p-2 text-white" href="https://api.mc-fdc.com/dashboard/login">ログイン</a>
    }
    const user = data.user
    return (
        <div className="flex flex-row">
            <Image className="rounded-full" alt={user.username} src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=128`} width={128} height={128} />
            <h3>{`${user.username}#${user.discriminator}`}</h3>
        </div>
    )
}

export default function Dashboard() {
    return (
        <Content title="ダッシュボード">
            <User />
        </Content>
    )
}
