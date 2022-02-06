import express from "express";
import dotenv from "dotenv";
const connectDB = require('./config/db')

const app = express();
const port = 3000;

connectDB();

// Load env vars
dotenv.config({ path: "./config/config.env" });

app.use(express.json())

// Test route file
const auth = require("./routes/auth");


app.use("/auth", auth);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});


