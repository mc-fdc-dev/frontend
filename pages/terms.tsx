import Content from "../components/content"
import { ReactNode } from 'react'


interface Props {
    number: string;
    title: string;
    children: ReactNode
}

function Article({number, title, children}: Props) {
    return (
        <div>
            <h4>{`第${number}条 (${title})`}</h4>
            {children}
        </div>
    )
}

export default function Terms() {
    return (
        <Content title="Term of service">
            <div className="text-center">
                <p className="text-right">作成日: 2022/7/26</p>
                <div className="bg-pink-100 rounded">
                    <h3 className="text-2xl">利用規約</h3>
                    <p className="text-xl">
                        この利用規約（以下，「本規約」といいます。）は，mc-fdc-dev（以下，「甲」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。
                        登録ユーザーの皆さま（以下，「乙」といいます。）には，本規約に従って，本サービスをご利用いただきます。
                    </p>
                    <Article number="1" title="適用">
                        <ol>
                            <li>本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。</li>
                            <li>当社は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。</li>
                        </ol>
                    </Article>
                </div>
            </div>
        </Content>
    )
}
