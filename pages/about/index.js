import axios from "axios";
import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";

export default function About({ title: { title } }) {
  return (
    <MainLayout title="About Page">
      <h1>{title}</h1>
      <button onClick={() => Router.push("/")}>Go back to home</button>
      <br />
      <br />
      <button onClick={() => Router.push("/posts")}>Go back to posts</button>
    </MainLayout>
  );
}

export const getServerSideProps = async () => {
  const resp = await axios.get("http://localhost:4200/about");
  const title = await resp.data;
  return {
    props: {
      title,
    },
  };
};
