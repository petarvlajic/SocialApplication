"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProfileSchema = new mongoose_1.default.Schema({
    profilePicture: {
        type: String
    },
    thumbnailPicutre: {
        type: String
    },
    birthDate: {
        type: Date
    },
    city: {
        type: String
    },
    education: {
        type: String
    }
});
module.exports = mongoose_1.default.model("Profile", ProfileSchema);
//# sourceMappingURL=Profile.js.map