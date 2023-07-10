import Post from './Post'

const Profile = ({ user, posts }) => {
  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Profile