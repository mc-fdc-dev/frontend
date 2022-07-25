import Link from 'next/link'


export default function Nav() {
    const navs = [{
        name: 'Contact',
        href: '/contact',
    }, {
        name: 'About',
        href: '/about',
    }]
    return (
        <nav>
            <ul className='flex'>
                {navs.map(nav => (
                    <li key={nav.name} className="mx-4">
                        <Link href={nav.href}><a className='text-2xl'>{nav.name}</a></Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}