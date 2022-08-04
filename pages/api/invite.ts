import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.redirect("https://discord.com/api/oauth2/authorize?client_id=1002877676526239794&permissions=413058591808&scope=bot%20applications.commands")
}
