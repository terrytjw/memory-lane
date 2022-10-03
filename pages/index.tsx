import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Hero from "../components/Hero";
import Modal from "../components/Modal";
import PhotoGrid from "../components/PhotoGrid";
import Slider from "../components/Slider";

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div>
      <Head>
        <title>Memories</title>
        <meta
          name="description"
          content="Take a trip down memory lane with me."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <main>
        <Hero
          heading="Memories"
          message="Capturing moments and keeping them alive."
          setIsModalOpen={setIsModalOpen}
        />
        <Slider />
        <PhotoGrid />
      </main>
    </div>
  );
};

export default Home;
