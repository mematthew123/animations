import CardFlip from "@/components/CardFlip";
import CardSlide from "@/components/CardSlide";
import CardTwist from "@/components/CardTwist";
import React from "react";

const cards = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 gap-8">
        <CardFlip />
        <CardSlide />
        <CardTwist />
      </div>
    </div>
  );
};

export default cards;
