    "use client"
    import { useState, useEffect } from "react";

const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time - 1000);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  const getFormatTime = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    let days = parseInt(Math.floor(total_hours / 24));

    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);

    return (
      <div className="flex items-center justify-center gap-2">
        <div>
            <span className="text-xl sm:text-4xl font-bold">{days}</span>
            <span className="text-xs sm:text-sm">d</span>
        </div>
        <div>
            <span className="text-xl sm:text-4xl font-bold">:{hours}</span>
            <span className="text-xs sm:text-sm">h</span>
        </div>
        <div>
            <span className="text-xl sm:text-4xl font-bold">:{minutes}</span>
            <span className="text-xs sm:text-sm">m</span>
        </div>
        <div>
            <span className="text-xl sm:text-4xl font-bold">:{seconds}</span>
            <span className="text-xs sm:text-sm">s</span>
        </div>
      </div>
    );
  };

  return <div className="px-4">{getFormatTime(time)}</div>;
};

export default Timer;
