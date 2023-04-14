import { useState, useEffect } from 'react';

const mixColors = (color1, color2, progress) => {
  const r1 = parseInt(color1.substring(1, 3), 16);
  const g1 = parseInt(color1.substring(3, 5), 16);
  const b1 = parseInt(color1.substring(5, 7), 16);

  const r2 = parseInt(color2.substring(1, 3), 16);
  const g2 = parseInt(color2.substring(3, 5), 16);
  const b2 = parseInt(color2.substring(5, 7), 16);

  const r = Math.round(r1 + (r2 - r1) * progress);
  const g = Math.round(g1 + (g2 - g1) * progress);
  const b = Math.round(b1 + (b2 - b1) * progress);

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

export const useSmoothColorTransition = (color1, color2, progress, duration = 100) => {
  const [currentColor, setCurrentColor] = useState(mixColors(color1, color2, progress));

  useEffect(() => {
    let start;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      const progressUpdate = Math.min(elapsed / duration, 1);
      setCurrentColor(mixColors(currentColor, mixColors(color1, color2, progress), progressUpdate));

      if (elapsed < duration) {
        window.requestAnimationFrame(step);
      } else {
        setCurrentColor(mixColors(color1, color2, progress));
      }
    };

    window.requestAnimationFrame(step);
  }, [color1, color2, progress, duration, currentColor]);

  return currentColor;
};
