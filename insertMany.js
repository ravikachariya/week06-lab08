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

    // Insert multiple documents
    await collection.insertMany([
      {
        title: "Post Title 2",
        body: "Body of post.",
        category: "Event",
        likes: 2,
        tags: ["news", "events"],
        date: new Date(),
      },
      {
        title: "Post Title 3",
        body: "Body of post.",
        category: "Technology",
        likes: 3,
        tags: ["Tech", "events"],
        date: new Date(),
      },
      {
        title: "Post Title 4",
        body: "Body of post.",
        category: "Event",
        likes: 4,
        tags: ["news", "events"],
        date: new Date(),
      },
    ]);
    console.log("Inserted 3 Documents");
  } finally {
    // Close the connection
    await client.close();
  }
}

main().catch(console.error);
