import Content from "../components/content"
import Image from "next/image"
import { ReactNode} from 'react'


interface Props {
    children: ReactNode;
}

function StaffMember({children}: Props) {
    return (
        <div className="border rounded text-center">
            {children}
        </div>
    )
}

export default function Staff() {
    return (
        <Content>
            <h2 className='text-3xl text-center'>スタッフ</h2>
            <p className='text-center text-xl'>スタッフは、サービスを改善するためにおります。</p>
            <div className='grid grid-cols-3'>
                <StaffMember>
                    <Image src="/images/staff/mc_fdc.png" alt="mc_fdc" width={300} height={300} />
                    <p>mc_fdc(Owner)</p>
                </StaffMember>
                <StaffMember>
                    <Image src="/images/staff/tasuren.png" alt="tasuren" width={300} height={300} />
                    <p>tasuren(Sub owner)</p>
                </StaffMember>
                <StaffMember>
                    <Image src="/images/staff/devon.png" alt="mc_fdc" width={300} height={300} />
                    <p>devon(Member)</p>
                </StaffMember>
            </div>
        </Content>
    )
}