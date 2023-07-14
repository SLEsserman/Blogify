userId
content
likes
comments

const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Define the user schema using the Schema constructor
const blogSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    content: {
      type: String,
      required: true
    },
    likes: {
      type: Number
    },
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          required: true
        },
        content: {
          type: String,
          required: true
        },
        // ...other comment fields
      }
    ]
  },
  {
    timestamps: true,
  }
)

// Create and export the User model based on the user schema
module.exports = mongoose.model("Blog", blogSchema)