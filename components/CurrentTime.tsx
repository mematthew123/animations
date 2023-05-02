import React from "react";

const CurrentTime: React.FC = () => {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className="text-4xl font-bold text-center">{time}</div>;
};

export default CurrentTime;
