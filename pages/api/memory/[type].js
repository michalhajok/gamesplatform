const { MongoClient } = require("mongodb")


const handler = async (req,res) => {
    const client = new MongoClient(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    await client.connect()
    console.log(req.query);
    const result = await client.db('gamesplatform').collection('memory').findOne({type: req.query.type})
    res.status(200).json(result.data)
    
    client.close()
}

export default handler
