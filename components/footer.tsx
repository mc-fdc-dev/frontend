import Image from "next/image"


export default function Footer() {
    const accounts = [{
            name: 'github',
            href: 'https://github.com/mc-fdc-dev',
            src: 'github.webp',
    }, {
        name: 'twitter',
        href: 'https://twitter.com/mc_fdc',
        src: 'twitter.webp',
    }]
    return (
        <footer className="bg-[#ff9eb0]">
            <div className="py-3">
                <h4 className="text-2xl text-center">accounts</h4>
                <div className="flex justify-center">
                    {accounts.map(account => (
                        <a href={account.href} className="m-2" key={account.name}><Image src={`/images/footer/${account.src}`} width={32} height={32} alt={account.name} /></a>
                    ))}
                </div>
            </div>
            <p className='pb-8 text-center text-xl'>&copy; 2022 mc-fdc-dev</p>
        </footer>
    )
}
