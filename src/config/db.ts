const mongoose = require('mongoose');
const uri = "mongodb+srv://petar:petar123@prviklaster.odhig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connectDB = async () => {
  const conn = await mongoose.connect(uri);

  console.log(`MongoDB connected: ${conn.connection.host}`);
};

module.exports = connectDB;