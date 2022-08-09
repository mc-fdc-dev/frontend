import useSWR from 'swr'
import Image from 'next/image'
import Link from 'next/link'
import Content from "../../components/content"
import DataT from "../../interfaces/dashboard/data"


async function fetcher(apiURL: string): Promise<DataT> {
    const res = await fetch(apiURL, {
        credentials: 'include'
    })
    return res.json()
}

function UserAndGuild() {
    const { data } = useSWR("https://api.mc-fdc.com/dashboard/me", fetcher)
    if (!data) return <p>Loading</p>
    if (!data.status) {
        return <a className="text-lg rounded bg-[#5865F2] p-2 text-white" href="https://api.mc-fdc.com/dashboard/login">ログイン</a>
    }
    const user = data.user
    return (
        <div>
            <div className="flex flex-row">
                <Image className="rounded-full" alt={user.username} src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp?size=128`} width={128} height={128} />
                <h3>{`${user.username}#${user.discriminator}`}</h3>
            </div>
            <h3 className="text-3xl text-center">サーバー</h3>
            <div className="grid grid-cols-3">
                {data.guilds.map(guild => (
                    guild.owner ? (
                        <div className="border rounded text-center m-4" key={guild.id}>
                            <Link href={`https://mc-fdc.com/dashboard/${guild.id}`}>
                                <Image className="rounded-full" alt={guild.name} src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp?size=128`} width={128} height={128} />
                                <p className="text-center">{guild.name}</p>
                            </Link>
                        </div>
                    ) : (null)
                ))}
            </div>
        </div>
    )
}

export default function Dashboard() {
    return (
        <Content title="ダッシュボード">
            <UserAndGuild />
        </Content>
    )
}
