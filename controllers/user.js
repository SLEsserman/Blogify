const User = require("../models/user")
const blogModel = require("../models/blog")

async function getUserProfile(req, res) {
  try {
    const blogs = await blogModel
      .find({
        userId: req.params.id,
      })
      .populate(["userId", { path: "comments", populate: ["user"] }])
    let user = await User.findById(req.params.id).populate([
      {
        path: "followers",
        select: "_id  name email avatar",
      },
      {
        path: "following",
        select: "_id name email avatar",
      },
    ])
    if (!user) return res.status(404).send("User not found")
    return res
      .status(200)
      .json({ blogs, user, message: "user profile fetched" })
  } catch (err) {
    console.log(err.message)
    return res.status(500).json({ message: "Unable to fetch user profile" })
  }
}

async function followUser(req, res) {
  try {
    const user = req.user
    const { followerId } = req.body
    // Update follower list of user you are following
    let userToFollow = await User.findById(followerId)
    if (!userToFollow.followers.includes(user._id)) {
      userToFollow.followers = [...userToFollow.followers, user._id]
    } else {
      const followersClone = userToFollow.followers
      let filteredData = followersClone.filter(
        (follower) => follower.toString() != user._id
      )
      userToFollow.followers = filteredData
    }
    await userToFollow.save()

    // Update following list of user who just followed someone
    let followingList = await User.findById(user._id)
    if (!followingList.following.includes(followerId)) {
      followingList.following = [...followingList.following, followerId]
    } else {
      const followClone = followingList.following
      let filteredData = followClone.filter(
        (follower) => follower.toString() != followerId
      )
      followingList.following = filteredData
    }
    await followingList.save()
    console.log("hey")
    res.status(200).json({
      message: "Done",
    })
  } catch (err) {
    return res.status(500).send({
      message: "unable to follow user",
    })
  }
}

module.exports = {
  followUser,
  getUserProfile,
}
