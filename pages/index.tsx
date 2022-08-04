import Link from 'next/link'


export default function Home() {
    return (
        <div>
            <div className='bg-pink-100 py-44'>
                <div className='text-center'>
                    <h2 className='text-4xl'>mc-fdc-dev</h2>
                    <p className='text-2xl'>mc-fdc-devは主にapiやbotを運営しています。</p>
                </div>
            </div>
            <div className='pt-6 text-center m-4 mr-[10%] ml-[10%] p-8 border border-solid rounded-lg'>
                <h3 className='m-4 text-3xl text-center'>Bot</h3>
                <Link href="/api/invite"><a className='text-lg rounded bg-[#5865F2] p-2 text-white'>導入する</a></Link>
                <div className="grid grid-cols-1 md:grid-cols-2 border rounded-lg m-8 p-4">
                    <div>
                        <h4 className='text-2xl font-medium'>ネタ系が多い</h4>
                        <p className='text-xl'>ネタ系が多いのでサーバが盛り上がります。</p>
                    </div>
                    <div>
                        <h4 className='text-2xl font-medium'>音楽機能</h4>
                        <p className='text-xl'>niconicoとyoutube対応しています。</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
