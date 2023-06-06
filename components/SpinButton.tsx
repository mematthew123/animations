import { motion } from "framer-motion";

type SpinButtonProps = {
  children: React.ReactNode;
};

const SpinButton: React.FC<SpinButtonProps> = ({ children }) => {
  const variants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#ff6347",
      transition: { duration: 0.3 },
    },
    rest: { scale: 1, backgroundColor: "#1e90ff" },
    pressed: { rotate: 90, scale: 0.8 },
  };

  return (
    <motion.button
      className="px-4 py-2 text-white rounded focus:outline-none"
      variants={variants}
      initial="rest"
      whileHover="hover"
      whileTap="pressed"
    >
      {children}
    </motion.button>
  );
};

export default SpinButton;
