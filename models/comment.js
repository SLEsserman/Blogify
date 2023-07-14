const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Define the user schema using the Schema constructor
const commentSchema = new Schema(
  {
    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
)

// Create and export the User model based on the user schema
module.exports = mongoose.model("Comment", commentSchema)
