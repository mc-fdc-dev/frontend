import Content from "../components/content"
import Image from "next/image"


export default function Staff() {
    return (
        <Content>
            <h2 className='text-3xl text-center'>スタッフ</h2>
            <p className='text-center text-xl'>スタッフは、サービスを改善するためにおります。</p>
            <div className='grid grid-cols-3'>
                <div>
                    <Image src="/images/staff/mc_fdc.png" alt="mc_fdc" width={200} height={200} />
                    <p>mc_fdc(Owner)</p>
                </div>
            </div>
        </Content>
    )
}