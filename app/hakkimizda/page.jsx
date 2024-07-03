import AboutPage from "@/components/about/AboutPage";
import Hero from "@/ui/Hero";
import React from "react";

export const metadata = {
  title: "Hakkımızda-Dorukhan",
};

const About = () => {
  return (
    <div>
      <Hero title={"Hakkımızda"} />
      <AboutPage />
    </div>
  );
};

export default About;
