const { MongoClient } = require("mongodb")


const handler = async (req,res) => {
    const client = new MongoClient(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    await client.connect()
    const result = await client.db('gamesplatform').collection('quiz').findOne({type: req.query.type})
    res.status(200).json(result.questions)
    
    client.close()
}

export default handler
