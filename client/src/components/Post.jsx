import axios from "axios"
import "./Post.css"
const Post = ({ postData, loggedInUser, setRefetch }) => {
  const updateLikeStatus = async () => {
    try {
      await axios.patch("http://localhost:3000/blog/" + postData._id)
      setRefetch((fetch) => !fetch)
    } catch (err) {
      console.log(err.message)
    }
  }
  return (
    <div>
      <h2>{postData.title}</h2>
      <p>{postData.content}</p>
      {loggedInUser ? (
        <div>
          <button onClick={updateLikeStatus}>
            {postData?.likes?.includes(loggedInUser._id) ? "Unlike" : "Like"}
          </button>
          Liked by {postData?.likes?.length}{" "}
          {postData?.likes?.length > 1 ? "people" : "person"}
        </div>
      ) : null}
      <p>
        Written by:{" "}
        <a href={`/post/user?id=${postData.userId._id}`}>
          {postData.userId.name}
        </a>
      </p>
      {/* Add like and comment functionality here */}
      <h4>Comments</h4>
      {postData.comments.map((comment) => {
        return (
          <div key={comment._id}>
            {comment.comment} by {comment.user.name}{" "}
          </div>
        )
      })}
    </div>
  )
}

export default Post
