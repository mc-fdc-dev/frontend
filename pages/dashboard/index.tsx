import useSWR from 'swr'


const fetcher = (...args) => fetch(...args).then(res => res.json())

function User() {
    const { user } = useSWR("https://api.mc-fdc.com/dashboard/me", fetcher)
    if (!user.success) {
        return <a className="text-lg rounded bg-[#5865F2] p-2 text-white" href="https://api.mc-fdc.com/dashboard/login">ログイン</a>
    }
    return (
        
    )
}
