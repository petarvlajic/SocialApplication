
import { MongoClient } from 'mongodb';

async function main() {
  const uri =
    "mongodb+srv://petar:VC4cUfwuNlWm4jHv@socialapp.40sdc.mongodb.net/SocialApp?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();
    // Make the appropriate DB calls
    await listDatabases(client);

  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

async function listDatabases(client){
   let databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

export default main
