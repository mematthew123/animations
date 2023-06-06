import { AnimatePresence, motion } from "framer-motion";

type FlipCardClockProps = {
  value: any;
};

const FlipCardClock: React.FC<FlipCardClockProps> = ({ value }) => {
  return (
    <AnimatePresence>
      <motion.div
        key={value}
        initial={{ rotateX: -90 }}
        animate={{ rotateX: 0 }}
        exit={{ rotateX: -90 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-12 h-12 bg-blue-500 text-white flex justify-center items-center text-2xl rounded shadow"
      >
        {value}
      </motion.div>
    </AnimatePresence>
  );
};

export default FlipCardClock;
