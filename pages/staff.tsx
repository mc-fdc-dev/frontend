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
    const staffs = [
        {
            name: 'mc_fdc',
            role: 'Owner',
            intro: '式守さん大好きキッズです。',
        },
        {
            name: 'tasuren',
            role: 'Sub owner',
            intro: '未記入',
        },
        {
            name: 'devon',
            role: 'Developer',
            intro: '未記入',
        }
    ]
    return (
        <Content>
            <h2 className='text-3xl text-center'>スタッフ</h2>
            <p className='text-center text-xl'>スタッフは、サービスを改善するためにおります。</p>
            <div className='grid grid-cols-3'>
                {staffs.map(staff => (
                    <StaffMember key={staff.name}>
                        <Image src={`/images/staff/${staff.name}.png`} alt={staff.name} width={300} height={300} />
                        <h3 className='text-xl'>{staff.name}</h3>
                        <p>{staff.intro}</p>
                    </StaffMember>
                ))}
                <StaffMember>
                    <Image src="/images/staff/mc_fdc.png" alt="mc_fdc" width={300} height={300} />
                    <p className="text-xl">mc_fdc(Owner)</p>
                    <p>式守さん大好きキッズです。</p>
                </StaffMember>
                <StaffMember>
                    <Image src="/images/staff/tasuren.png" alt="tasuren" width={300} height={300} />
                    <p className="text-xl">tasuren(Sub owner)</p>
                    <p>未記入</p>
                </StaffMember>
            </div>
        </Content>
    )
}