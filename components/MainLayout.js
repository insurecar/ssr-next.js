import Link from "next/link";
import Head from "next/head";

export function MainLayout({ children, title = "Next APP" }) {
  return (
    <>
      <Head>
        <title>{title} | Next Course</title>
        <link rel="icon" href="/image/favicon.ico" type="image/x-icon" />
        <meta name="keywords" content="next, javascript, next.js,react" />
        <meta name="description" content="this youtube tutorial for next" />
        <meta charSet="utf-8" />
      </Head>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>
        {`
          nav {
            position: fixed;
            height: 60px;
            left: 0;
            right: 0;
            top: 0;
            background: blue;
            display: flex;
            justify-content: space-around;
            align-items: center;
            color: white;
          }
          nav a {
            text-decoration: none;
            color: white;
          }
          main {
            margin-top: 60px;
            padding: 1rem;
          }
        `}
      </style>
    </>
  );
}
