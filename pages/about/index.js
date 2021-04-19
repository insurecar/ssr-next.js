import Router from "next/router";

export default function About() {
  return (
    <>
      <h1>About page</h1>

      <button onClick={() => Router.push("/")}>Go back to home</button>
      <br />
      <br />
      <button onClick={() => Router.push("/posts")}>Go back to home</button>
    </>
  );
}
