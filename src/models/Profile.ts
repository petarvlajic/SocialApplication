import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  profilePicture : {
      type: String
  },
  thumbnailPicutre : {
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

module.exports = mongoose.model("Profile", ProfileSchema);
