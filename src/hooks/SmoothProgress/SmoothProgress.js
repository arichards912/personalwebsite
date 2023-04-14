import { useState, useEffect } from 'react';

export const useSmoothProgress = (value, duration = 300) => {
  const [progress, setProgress] = useState(value);

  useEffect(() => {
    let start;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      const progressUpdate = Math.min(elapsed / duration, 1) * (value - progress);
      setProgress(progress + progressUpdate);

      const hitThreshold = Math.abs(value - progress) > 0.1 ? false : true;
      if (elapsed < duration && !hitThreshold) {
        window.requestAnimationFrame(step);
      } else {
        setProgress(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, duration, progress]);

  return progress;
};
