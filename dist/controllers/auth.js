"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.registerUser = void 0;
const User = require("../models/User");
// @desc   Register User 
// @route  POST http://localhost:3000/auth/register
// @access Public
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, password } = req.body;
    // console.log(req.body);
    // Create user
    const user = yield User.create({
        firstName,
        lastName,
        email,
        password,
    });
    let msg = "User successfully created";
    res.status(201).json(user);
});
exports.registerUser = registerUser;
// @desc   Delete User
// @route  DELETE http://localhost:3000/auth/delete/:id
// @access Public
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User.findById(req.params.id);
    try {
        user.remove();
        res.status(200).json({ msg: `User ${req.params.id} is successfully deleted` });
    }
    catch (error) {
        res.status(401).json({ msg: "User not found" });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=auth.js.map