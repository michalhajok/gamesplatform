import { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient, MongoClientOptions } from "mongodb"

type Data = {
    type: string,
    questions: Object[]
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const client = new MongoClient(process.env.MONGODB_URI || "", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as MongoClientOptions);
    await client.connect()
    const result = await client.db('gamesplatform').collection('quiz').findOne({type: req.query.type})
    
    if(result) {
        res.status(200).json(result.questions)
    }
    
    client.close()
}

export default handler
