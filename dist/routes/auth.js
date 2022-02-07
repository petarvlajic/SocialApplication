"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { registerUser, deleteUser } = require('../controllers/auth');
const router = express_1.default.Router({});
router.post('/register', registerUser);
router.delete('/delete/:id', deleteUser);
module.exports = router;
//# sourceMappingURL=auth.js.map