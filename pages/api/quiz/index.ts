import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    res.json({message: "Please choose type of quiz"})
}

export default handler