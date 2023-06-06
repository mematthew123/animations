import Countdown from "@/components/Countdown";
import CurrentDate from "@/components/CurrentDate";
import CurrentTime from "@/components/CurrentTime";
import React from "react";
import FlipClock from "@/components/FlipClock";

const clocks = () => {
  return (
    <div className="container mx-auto mt-10">
      <Countdown />
      <div className="grid grid-cols-1 gap-8">
        <CurrentTime />
        <FlipClock />
      </div>
    </div>
  );
};

export default clocks;
