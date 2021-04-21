import { MainLayout } from "../../components/MainLayout";
import axios from "axios";
import Link from "next/link";

export default function Post({ post }) {
  console.log(post);
  return (
    <MainLayout>
      <h1>Post:{post.title}</h1>
      <p>{post.body}</p>
      <hr />
      <Link href="/posts">Back to all posts</Link>
    </MainLayout>
  );
}

Post.getInitialProps = async ({ query: { idPost } }) => {
  console.log(idPost);
  const response = await axios(`http://localhost:4200/posts/${idPost}`);
  const post = await response.data;

  return { post };
};
