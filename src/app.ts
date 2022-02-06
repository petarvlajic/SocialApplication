import express from "express";
import dotenv from "dotenv";
import main from './config/db'

const app = express();
const port = 3000;

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Test route file
const test = require("./routes/test");

main();

app.use("/test", test);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});


