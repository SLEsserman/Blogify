userId
content
likes
comments

const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Define the user schema using the Schema constructor
const blogSchema = new Schema(
  {
    userId: String,
    content: String,
    likes: Number,
    comments: []
    googleId: {
      type: String,
      required: true,
    },
    email: String,
    avatar: String,
  },
  {
    timestamps: true,
  }
)

// Create and export the User model based on the user schema
module.exports = mongoose.model("Blog", blogSchema)