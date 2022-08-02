import { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient, MongoClientOptions } from "mongodb"

type Data = {
    type: string,
    data: Object[]
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const client = new MongoClient(process.env.MONGODB_URI || "", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as MongoClientOptions );
    await client.connect()
    console.log(req.query);
    const result = await client.db('gamesplatform').collection('memory').findOne({type: req.query.type})
    
    if(result) {
        res.status(200).json(result.data)
    }
    
    client.close()
}

export default handler
