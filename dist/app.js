"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connectDB = require('./config/db');
const app = (0, express_1.default)();
const port = 3000;
connectDB();
// Load env vars
dotenv_1.default.config({ path: "./config/config.env" });
app.use(express_1.default.json());
// Test route file
const auth = require("./routes/auth");
app.use("/auth", auth);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map