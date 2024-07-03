import PropertyPage from "@/components/PropertyPage/PropertyPage";
import Hero from "@/ui/Hero";
import React from "react";

export const metadata = {
  title: "Evler-Dorukhan",
};

const Property = () => {
  return (
    <div>
      <Hero title={"Evlerimiz"} />
      <PropertyPage />
    </div>
  );
};

export default Property;
