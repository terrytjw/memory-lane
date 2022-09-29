import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import PhotoGrid from "../components/PhotoGrid";
import Slider from "../components/Slider";

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
          heading="Memory"
          message="Capturing moments and keeping them alive."
        />
        <Slider />
        <PhotoGrid />
      </main>
    </div>
  );
};

export default Home;
