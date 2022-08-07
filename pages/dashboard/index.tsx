import useSWR from 'swr'
import Image from 'next/image'
import Content from "../components/content"


const fetcher = (...args) => fetch(...args).then(res => res.json())

function User() {
    const { user } = useSWR("https://api.mc-fdc.com/dashboard/me", fetcher)
    if (!user) return <p>Loading</p>
    if (!user.success) {
        return <a className="text-lg rounded bg-[#5865F2] p-2 text-white" href="https://api.mc-fdc.com/dashboard/login">ログイン</a>
    }
    return (
        <div>
            <h3>{`${user.username}#${user.discriminator}`}</h3>
            <Image className="rounded-full" alt={user.username} src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} width={300} height={300} />
        </div>
    )
}

export default function Dashboard() {
    return (
        <Content>
            <User />
        </Content>
    )
}
