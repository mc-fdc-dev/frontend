import { ReactNode } from 'react'


interface Props {
    title: string;
    children: ReactNode;
}

function Content({title, children}: Props) {
    return (
        <div>
            <h4 className='text-2xl font-medium'>{title}</h4>
            {children}
        </div>
    )
}

export default function Contact() {
    return (
        <div className='mt-4 mx-[10%]'>
            <h2 className='text-3xl text-center'>Contact</h2>
            <div className='grid grid-cols-2'>
                <Content title="Email">
                    <a href='mailto:support@mc-fdc.com' className='text-xl text-[#b7c5ff]'>support@mc-fdc.com</a>
                </Content>
                <Content title="Discord">
                    <a className='text-xl text-[#b7c5ff]' href="https://discord.gg/4R83HQZGcV">https://discord.gg/4R83HQZGcV</a>
                </Content>
                <Content title="twitter">
                    <a className='text-xl text-[#b7c5ff]' href="https://twitter.com/mc_fdc">https://twitter.com/mc_fdc</a>
                </Content>
                <Content title="Form">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf9wAMFjgT9fQXQ-9jK-1h-0x-ah2RdDTBptSvL4f73FZ3UOA/viewform?embedded=true" width="610" height="539" frameBorder="0" marginHeight={0} marginWidth={0}>読み込んでいます…</iframe>
                </Content>
            </div>
        </div>
    )
}
