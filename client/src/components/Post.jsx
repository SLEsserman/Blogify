const Post = ({ postData }) => {
  return (
    <div className="post">
      <h2>{postData.content}</h2>
      <p>{postData.comments}</p>
      <button>{postData.likes}</button>
      <p>Written by: {postData.userId.name}</p>
      {/* Add like and comment functionality here */}
    </div>
  )
}

export default Post