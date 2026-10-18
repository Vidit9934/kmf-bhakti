import { useEffect, useState } from 'react';

// Starts at the final number so it is correct without JS or motion. When `play`
// turns true it counts up from 0 once, unless the visitor prefers reduced motion.
export function useCountUp(target, play, { duration = 1600, reduced = false } = {}) {
  const [value, setValue] = useState(target);

  useEffect(() => {
    if (!play || reduced) return undefined;
    let frame = 0;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    setValue(0);
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [play, reduced, target, duration]);

  return value;
}
