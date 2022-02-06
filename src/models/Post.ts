import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Post", PostSchema);
