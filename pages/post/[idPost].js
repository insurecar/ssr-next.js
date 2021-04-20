import { useRouter } from "next/router";
import Head from "next/head";
import MainLayout from "../../components/MainLayout";

export default function Post() {
  const router = useRouter();
  console.log(router);
  return (
    <MainLayout>
      <Head>
        <title>Post</title>
      </Head>
      <h1>Post: {router.query.idPost}</h1>
    </MainLayout>
  );
}
