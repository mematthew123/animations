import React from "react";
import { motion } from "framer-motion";



const CurrentTime: React.FC = () => {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="text-4xl font-bold text-center"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      {time}
    </motion.div>
  );
};

export default CurrentTime;
