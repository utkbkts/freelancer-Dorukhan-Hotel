import Contact from "@/components/contact/Contact";
import Exprience from "@/components/exprience/Exprience";
import Hero from "@/components/hero/Hero";
import Rooms from "@/components/rooms/Rooms";
import VideoPage from "@/components/video/VideoPage";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <Exprience />
      <Rooms />
      <VideoPage />
      <Contact />
    </div>
  );
};

export default Home;
