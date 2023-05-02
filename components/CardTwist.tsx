import React from "react";
import CurrentDate from "./CurrentDate";

const CardTwist = () => {
  return (
    // this creates a card that twists when the user hovers over it.

    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="group w-96 h-96">
        <div className="relative w-full h-full bg-gray-100 rounded-xl shadow-lg transform transition duration-500 ease-in-out hover:scale-110 hover:rotate-12">
          <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-gradient-to-r from-green-400 to-blue-500 transform rotate-12 group-hover:rotate-0 group-hover:scale-110 transition duration-500 ease-in-out"></div>
          <div className="relative flex flex-col justify-center items-center w-full h-full py-8 rounded-xl bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default CardTwist;
