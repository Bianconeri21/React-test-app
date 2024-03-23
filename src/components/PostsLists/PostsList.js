import PostShow from "../PostShow/PostShow";

import "./postsList.css";

const PostsList = ({ posts }) => (
  <div className="posts-container">
    {posts.map((post, index) => {
      return <PostShow key={`${post.title}_${index}`} post={post} />;
    })}
  </div>
);

export default PostsList;
