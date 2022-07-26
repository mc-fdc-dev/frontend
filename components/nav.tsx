import Link from 'next/link'


export default function Nav() {
    const navs = [{
        name: 'contact',
        href: '/contact',
    }, {
        name: 'staff',
        href: '/staff',
    }, {
        name: 'terms of service',
        href: '/terms',
    }]
    return (
        <nav>
            <ul className='flex'>
                {navs.map(nav => (
                    <li key={nav.name} className="mx-4 invisible md:visible">
                        <Link href={nav.href}><a className='text-2xl'>{nav.name}</a></Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
