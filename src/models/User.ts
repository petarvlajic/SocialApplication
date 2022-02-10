import mongoose from "mongoose";
import crypto from 'crypto';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please add a Firstname"],
  },
  lastName: {
    type: String,
    required: [true, "Please add a Lastname"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: false,
  },
  friends: [
    {
      friendId: {
        type: String,
        required: true,
      },
    },
  ],
  groups: [
    {
      groupId: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },


  
});

module.exports = mongoose.model("User", UserSchema);
