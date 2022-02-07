"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PostSchema = new mongoose_1.default.Schema({
    description: {
        type: String,
    },
    photos: {
        type: String,
    },
    likes: [
        {
            userId: {
                type: String,
            },
        },
    ],
    dislikes: [
        {
            userId: {
                type: String,
            },
        },
    ],
    comments: [
        {
            userId: {
                type: String,
            },
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose_1.default.model("Post", PostSchema);
//# sourceMappingURL=Post.js.map