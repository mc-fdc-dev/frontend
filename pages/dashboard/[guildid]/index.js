import { useRouter } from 'next/router'


export default function Main() {
    const router = useRouter()
    console.log(router.query.guildid)
    return (
        <p>hello</p>
    )
}
