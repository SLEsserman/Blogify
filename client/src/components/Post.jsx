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

  const handleDelete = async () => {
    try {
      await axios.delete("http://localhost:3000/blog/" + postData._id)
      setRefetch((fetch) => !fetch)
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div>
      <h2 className="text-xl font-bold">{postData.title}</h2>
      <p className="mt-2 text-md font-light">{postData.content}</p>
      <p className="mt-2 text-md font-light">Category: {postData?.category?.name}</p>
      {loggedInUser ? (
        <div>
          <button className="bg-blue-300 p-2 rounded-md font-bold text-white" onClick={updateLikeStatus}>
            {postData?.likes?.includes(loggedInUser._id) ? "Unlike" : "Like"}
          </button>&nbsp;
          Liked by {postData?.likes?.length}{" "}
          {postData?.likes?.length > 1 ? "people" : "person"}
        </div>
      ) : null}
      <hr className="mt-2 mb-2" />
      <p>
        <span className="font-bold">Written by: </span>
        <a
          className="text-underline"
          href={`/post/user?id=${postData.userId._id}`}
        >
          {postData.userId.name}
        </a>
      </p>
      {/* Add like and comment functionality here */}
      <div className="border border-gray-700 px-4 py-2 mt-2">
        <h4 className="mt-2 mb-2 font-bold">Post Comments</h4>
        {postData.comments.map((comment) => {
          return (
            <p key={comment._id}>
              {" "}
              {"->"} "{comment.comment}" by <b>{comment.user.name} </b>
            </p>
          )
        })}
      </div>
      {postData?.userId?._id === loggedInUser?._id ? (
        <button onClick={handleDelete} id="delete-btn">
          Delete post
        </button>
      ) : null}
    </div>
  )
}

export default Post
