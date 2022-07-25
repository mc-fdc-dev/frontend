import Base from '../components/base'


export default function Home() {
    return (
        <Base>
            <div className='bg-pink-100 py-44'>
                <div className='text-center'>
                    <h2 className='text-4xl'>mc-fdc-dev</h2>
                    <p className='text-2xl'>mc-fdc-devは主にapiやbotを運営しています。</p>
                </div>
            </div>
            <div className='pt-6 text-center'>
                <h3 className='text-3xl text-center'>Bot</h3>
                <div className="grid grid-cols-2">
                    <div>
                        <h4 className='text-2xl font-medium'>ネタ系が多い</h4>
                        <p className='text-xl'>ネタ系が多いのでサーバが盛り上がります。</p>
                    </div>
                    <div>
                        <h4 className='text-2xl font-medium'>音楽機能</h4>
                        <p className='text-xl'>niconicoとyoutube対応しています。</p>
                    </div>
                </div>
                <a href="" className='text-2xl rounded bg-indigo-500 p-2 text-white'>導入する</a>
            </div>
        </Base>
    )
}