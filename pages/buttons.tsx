import React from "react";
import Buttons from "../components/HoverButtons";
import GSAPHoverButtons from "@/components/GSAPHoverButtons";
import SpinButton from "@/components/SpinButton";

const buttons = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 gap-8">
        <GSAPHoverButtons />
        <Buttons>Amazing</Buttons>
        <SpinButton> Far out, dude! </SpinButton>
      </div>
    </div>
  );
};

export default buttons;
