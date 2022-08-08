import useSWR, { Fetcher } from 'swr'
import Image from 'next/image'
import Content from "../../components/content"
import UserT from "../../interfaces/user"


async function fetcher(apiURL: string): Promise<UserT> {
    const res = await fetch(apiURL, {
        credentials: 'include'
    })
    return res.json()
}

function User() {
    const { data } = useSWR("https://api.mc-fdc.com/dashboard/me", fetcher)
    console.log(data);
    if (!data) return <p>Loading</p>
    if (!data.status) {
        return <a className="text-lg rounded bg-[#5865F2] p-2 text-white" href="https://api.mc-fdc.com/dashboard/login">ログイン</a>
    }
    return (
        <div>
            <h3>{`${data.username}#${data.discriminator}`}</h3>
            <Image className="rounded-full" alt={data.username} src={`https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png`} width={100} height={100} />
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
