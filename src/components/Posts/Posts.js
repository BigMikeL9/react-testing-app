import react, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  console.log(posts);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const data = await response.json();

      const transformedData = data.slice(0, 10);
      setPosts(transformedData);

      // try {
      //   const response = await fetch(
      //     "https://jsonplaceholder.typicode.com/posts"
      //   );

      //   if (!response.ok) throw new Error("Something went wrong!! 😢");

      //   const data = await response.json();

      //   const transformedData = data.slice(0, 10);
      //   setPosts(transformedData);
      // } catch (error) {
      //   console.log(error.message);
      //   console.log(error.cause);
      // }
    };

    fetchPosts();

    return () => {};
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h2>Post Id: {post.id}</h2>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
