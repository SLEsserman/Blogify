const Post = ({ content, comments, likes }) => {
  return (
    <div className="post">
      <h2>{content}</h2>
      <p>{comments}</p>
      <p>{likes}</p>
      {/* Add like and comment functionality here */}
    </div>
  )
}

export default Post