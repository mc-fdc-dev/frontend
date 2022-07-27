import Content from "../components/content"
import Image from "next/image"
import { ReactNode } from 'react'


interface Props {
    children: ReactNode;
}

function StaffMember({children}: Props) {
    return (
        <div className="border rounded text-center m-4">
            {children}
        </div>
    )
}

export default function Staff() {
    const staffs = [
        {
            name: 'mc_fdc',
            role: 'Owner',
            intro: '式守さん大好きだよ。',
        },
        {
            name: 'tasuren',
            role: 'Sub owner',
            intro: '未記入',
        },
        {
            name: 'devon',
            role: 'Developer',
            intro: '以下省略',
        },
        {
            name: 'renorari',
            role: 'Developer',
            intro: '自分がしたいことあるけどそれが多すぎて多忙な人',
        },
        {
            name: 'Dyoll',
            role: 'Developer',
            intro: '未記入',
        },
        {
            name: 'chasyumen',
            role: 'Developer',
            intro: '未記入',
        }
    ]
    return (
        <Content title="スタッフ">
            <p className='text-center text-xl'>スタッフは、サービスを改善するためにおります。</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
                {staffs.map(staff => (
                    <StaffMember key={staff.name}>
                        <Image className="rounded-full" src={`/images/staff/${staff.name}.png`} alt={staff.name} width={300} height={300} />
                        <h3 className='text-xl'>{`${staff.name}(${staff.role})`}</h3>
                        <p>{staff.intro}</p>
                    </StaffMember>
                ))}
            </div>
        </Content>
    )
}
