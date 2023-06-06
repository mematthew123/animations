import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Notification = () => {
  const [isVisible, setIsVisible] = useState(true);
  const threshold = 50;

  const variants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 },
  };

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x > threshold) {
      setIsVisible(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="w-full p-4 bg-blue-600 text-white rounded"
          key="notification"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          variants={variants}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          Swipe to dismiss this notification.
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
