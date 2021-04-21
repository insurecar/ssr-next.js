import { MainLayout } from "../components/MainLayout";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function Posts({ posts: serverPost }) {
  console.log(serverPost);
  const [posts, setPosts] = useState(serverPost);

  useEffect(() => {
    async function load() {
      const resp = await axios.get("http://localhost:4200/posts");
      const data = await resp.data;

      setPosts(data);
    }
    if (!serverPost) {
      load();
    }
  }, []);

  if (!posts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1>Posts Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/[idPost]`} as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

export async function getStaticProps({ req }) {
  if (!req) {
    return {
      props: {
        posts: null,
      },
    };
  }
  const resp = await axios.get("http://localhost:4200/posts");
  const posts = await resp.data;
  return { props: { posts } };
}
