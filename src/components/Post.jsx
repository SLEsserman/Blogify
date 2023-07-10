
const Post = ({ post }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {/* Add like and comment functionality here */}
    </div>
  )
}

export default Post