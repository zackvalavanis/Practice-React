export function PostsIndex(props) {
  return (
    <div>
      <div id='responseMessage'></div>
      <div id="posts-index">
        <h1>All Posts</h1>
        {props.posts.map(post => (
          <div key={post.id} className='post'>
            <h2>{post.title}</h2>
            <p>Body: {post.body}</p>
            <img src={post.image}
              alt="Post image" />
          </div>
        ))}
      </div>
    </div>
  );
}
