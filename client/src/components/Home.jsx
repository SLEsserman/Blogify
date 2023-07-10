import Post from './Post'

const Home = ({ posts }) => {
  return (
    <div>
      <h1>Blogify</h1>
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Home