import { MainLayout } from "../components/MainLayout";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function Posts({ result }) {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4200/posts")
  //     .then((resp) => setPosts(resp.data));
  // }, []);

  return (
    <MainLayout>
      <h1>Posts Page</h1>
      <ul>
        {result.map((post) => (
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

export async function getStaticProps() {
  const resp = await axios.get("http://localhost:4200/posts");
  const result = await resp.data;
  return { props: { result } };
}
