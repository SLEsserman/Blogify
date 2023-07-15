const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Define the user schema using the Schema constructor
const userSchema = new Schema(
  {
    name: String,
    googleId: {
      type: String,
      required: true,
    },
    email: String,
    avatar: String,
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
)

// Create and export the User model based on the user schema
module.exports = mongoose.model("User", userSchema)
