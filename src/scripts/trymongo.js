const { MongoClient } = require('mongodb');
require('dotenv').config();

const url = process.env.DB_URL || 'mongodb://192.168.99.100/issuetracker';

async function testWithAsync() {
  console.log('\n--- testWithAsync ---');
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    console.log('Connected to MongoDB URL', url);
    const db = client.db();
    const collection = db.collection('employees');

    const employee = { id: 6, name: 'B. Async', age: 16 };
    const result = await collection.insertOne(employee);
    console.log('Result of insert: ', result.insertedId);

    const docs = await collection.find({ _id: result.insertedId }).toArray();
    console.log('Result of find: ', docs);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
}

testWithAsync();
