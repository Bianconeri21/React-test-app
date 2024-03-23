import { useState, useCallback, useEffect } from "react";

import { fetchPosts } from "./assets/api.js";
import Header from "./components/Header/Header.js";
import PostsList from "./components/PostsLists/PostsList.js";
import ResultNotFound from "./components/ResultNotFound/ResultNotFound.js";

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const fetchPostsData = useCallback(async () => {
    const postsData = await fetchPosts();
    setPosts(postsData);
    setFilteredPosts(postsData);
  }, []);

  useEffect(() => {
    fetchPostsData();
  }, [fetchPostsData]);

  const handleSearch = (searchText) => {
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchText.toLowerCase()) ||
        post.text.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      {filteredPosts.length ? <PostsList posts={filteredPosts} /> : <ResultNotFound />}
    </div>
  );
}

export default App;
