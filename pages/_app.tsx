import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Layout from "../components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Nav />
      <Component {...pageProps} />;
      <Footer />
    </Layout>
  );
}
