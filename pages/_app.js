import "../styles/main.scss";
import NextNprogress from "nextjs-progressbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="coral"
        startPosition={0.3}
        stopDelayMs={200}
        height="5"
      />
      <Component {...pageProps} />
    </>
  );
}
