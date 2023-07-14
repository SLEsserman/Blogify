const Post = ({ content, comments, likes }) => {
  return (
    <div className="post">
      <h2>{content}</h2>
      <p>{comments}</p>
      <button>{likes}</button>
      <p>Written by: John DOe</p>
      {/* Add like and comment functionality here */}
    </div>
  )
}

export default Post