import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Memory</title>
        <meta
          name="description"
          content="Take a trip down memory lane with me."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero
          heading="Memory Lane"
          message="Capturing moments and keeping them alive."
        />
      </main>
    </div>
  );
};

export default Home;
