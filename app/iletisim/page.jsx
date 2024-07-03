import ContactPage from "@/pages/ContactPage/ContactPage";
import Hero from "@/ui/Hero";
import React from "react";

export const metadata = {
  title: "İletişim-Dorukhan",
};

const About = () => {
  return (
    <div>
      <Hero title={"İletişim"} />
      <ContactPage />
    </div>
  );
};

export default About;
