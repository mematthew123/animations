import React from "react";

const CircleAnimation = () => (
  <div className="flex align-middle -translate-x-3.5 justify-center items-center">
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <circle className="circle-animation" cx="50" cy="50" r="40" />
      <style jsx>{`
        .circle-animation {
          animation: spin 2s linear infinite;
          fill: green;
          border: 1px solid black;
        }
        @keyframes spin {
          50% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </svg>
  </div>
);

export default CircleAnimation;
