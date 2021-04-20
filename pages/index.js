import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

export default function Index() {
  return (
    <MainLayout title={"Home Page"}>
      <h1>Next.JS!</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href="/posts">
          <a>Post</a>
        </Link>
      </p>

      <p>Lorem ipsum isajja </p>
    </MainLayout>
  );
}
