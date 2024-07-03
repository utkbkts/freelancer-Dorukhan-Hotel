import HomeDetailsPage from "@/pages/HomeDetailsPage/HomeDetailsPage";
import Hero from "@/ui/Hero";
import React from "react";

export const metadata = {
  title: "Ev Detayları-Dorukhan",
};

const HomeDetails = () => {
  return (
    <div>
      <Hero title={"Detay"} />
      <HomeDetailsPage />
    </div>
  );
};

export default HomeDetails;
