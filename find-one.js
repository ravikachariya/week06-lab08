const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://localhost:27017";

// Database Name
const dbName = "blog";

// Collection Name
const collectionName = "posts";

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected successfully to server");

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    // Find a single document
    const document = await collection.findOne({});
    console.log("First document:");
    console.log(document);
  } finally {
    // Close the connection
    await client.close();
  }
}

main().catch(console.error);
