import { useEffect, useState } from 'react';

// True once the element has entered the viewport. Without IntersectionObserver
// it reports true immediately, so content never stays hidden or unanimated.
export function useInView(ref, { threshold = 0.3 } = {}) {
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (!('IntersectionObserver' in window)) {
      setSeen(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return seen;
}
