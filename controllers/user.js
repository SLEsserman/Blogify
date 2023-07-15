const User  = require("../models/user");

async function followUser (req, res){
  try {
    const user = req.user;
    const { followerId } = req.body;
    // Update follower list of user you are following
    let userToFollow = await User.findById(followerId);
    if (!userToFollow.followers.includes(user._id)) {
      userToFollow.followers = [...userToFollow.followers, user._id]
    } else {
      const followersClone = userToFollow.followers;
      let filteredData = followersClone.filter((follower) => follower.toString() != user._id)
      userToFollow.followers = filteredData;
    }
    await userToFollow.save();

    // Update following list of user who just followed someone
    let followingList = await User.findById(user._id);
    if (!followingList.following.includes(followerId)) {
      followingList.following = [...followingList.following, followerId]
    } else {
      const followClone = followingList.following;
      let filteredData = followClone.filter((follower) => follower.toString() != followerId)
      followingList.following = filteredData;
    }
    await followingList.save();
    res.status(200).end();
  } catch(err){
    return res.status(500).send({
      message : "unable to follow user"
    })
  }
}

module.exports = {
  followUser,
}