import Link from "next/link";

export default function Index() {
  return (
    <>
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
    </>
  );
}
