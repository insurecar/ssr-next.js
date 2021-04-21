import { MainLayout } from "../../components/MainLayout";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Post({ post: serverPost }) {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const response = await axios(
        `http://localhost:4200/posts/${router.query.idPost}`
      );
      const data = await response.data;
      setPost(data);
    }
    if (!serverPost) load();
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <p>Loading</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1>Post:{post.title}</h1>
      <p>{post.body}</p>
      <hr />
      <Link href="/posts">Back to all posts</Link>
    </MainLayout>
  );
}

Post.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return {
      post: null,
    };
  }
  const response = await axios(`http://localhost:4200/posts/${query.idPost}`);
  const post = await response.data;

  return { post };
};
