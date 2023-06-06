import React, { MouseEvent } from "react";

import { gsap } from "gsap";

interface GSAPHoverButtonsProps {}

const GSAPHoverButtons: React.FC<GSAPHoverButtonsProps> = ({}) => {
  const onEnter = (e: MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget as HTMLElement, {
      backgroundColor: "#e77614",
      color: "#ffffff", //  the text color
      scale: 1.2,
    });
  };

  const onLeave = (e: MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget as HTMLElement, {
      backgroundColor: "#28a92b",
      color: "#000000", // changes text color back to black
      scale: 1,
    });
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <button
          className="w-32 h-32 bg-green-500 rounded-full"
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          Oh wow!
        </button>
      </div>
    </div>
  );
};

export default GSAPHoverButtons;
