const Post = ({ postData }) => {
  return (
    <div className="post">
      <h2>{postData.content}</h2>
      <p>{postData.comments}</p>
      <button>{postData.likes}</button>
      <p>
        Written by:{" "}
        <a href={`/post/user?id=${postData.userId._id}`}>
          {postData.userId.name}
        </a>
      </p>
      {/* Add like and comment functionality here */}
    </div>
  )
}

export default Post
