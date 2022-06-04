import { useEffect, useState } from "react";

const useProgressBarPosition = ({ position, hasPaused, duration }) => {
  let positionRef = Number(((position / duration) * 100).toFixed(1));
  let percentage = positionRef / 100;
  let progressBar = Math.round(duration * percentage);

  const [currentPosition, setCurrentPosition] = useState(positionRef);

  useEffect(() => {
    if (!hasPaused) {
      const interval = setInterval(() => {
        setCurrentPosition((progressBar += 300));
      }, 300);

      return () => clearInterval(interval);
    }
  }, [hasPaused, position]);

  return [currentPosition, positionRef];
};

export { useProgressBarPosition };
