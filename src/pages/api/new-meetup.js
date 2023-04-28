import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const client = await MongoClient.connect(
      'mongodb+srv://me12b146:7AV9f8n2KVujFTce@apac-mumbai.mezpcbu.mongodb.net/?retryWrites=true&w=majority'
    );

    try {
      const db = client.db('next');

      const meetupsCollection = db.collection('meetups');

      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      res.status(201).json({ message: 'meetup inserted successfully' });
    } catch (e) {
      console.log('Connection failed due to error: ' + e.message);
    } finally {
      // Ensures that the client will close when you finish/error
      client.close();
    }
  }
}

export default handler;
