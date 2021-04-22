import { MainLayout } from "../../components/MainLayout";
import axios from "axios";
import Link from "next/link";

export default function Post({ post }) {
  return (
    <MainLayout>
      <h1>Post:{post.title}</h1>
      <p>{post.body}</p>
      <hr />
      <Link href="/posts">Back to all posts</Link>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const response = await axios.get(`http://localhost:4200/posts`);
  const posts = await response.data;

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { idPost: `${post.id}` },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const response = await axios.get(
    `http://localhost:4200/posts/${params.idPost}`
  );
  const post = await response.data;

  return { props: { post } };
};
