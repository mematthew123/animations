import { motion } from "framer-motion";

// this is a reusable component that can be used anywhere in the app and the text can be changed
// this animation is done using framer motion and the variants are defined in the HoverButtons component
// This component chnages the scale of the button on hover and the background color and text color

type HoverButtonsProps = {
  children: React.ReactNode;
};

const HoverButtons: React.FC<HoverButtonsProps> = ({ children }) => {
  const variants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    rest: { scale: 1 },
  };

  return (
    <motion.button
      className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-500 focus:outline-none"
      variants={variants}
      initial="rest"
      whileHover="hover"
    >
      {children}
    </motion.button>
  );
};

export default HoverButtons;
