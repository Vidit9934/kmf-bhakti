import { useEffect } from 'react';

// Drives the hero's "diya" light. The light position is written straight to CSS
// variables on `targetRef` from a rAF loop, so moving the mouse never re-renders React.
// - mouse/pen: the light follows the pointer while it is over the hero
// - otherwise (touch, pointer away): the light drifts slowly on its own
// - reduced motion: a still light, no loop
// The loop only runs while the hero is on screen.
export function useDiyaLight(sectionRef, targetRef, reduced) {
  useEffect(() => {
    const section = sectionRef.current;
    const target = targetRef.current;
    if (!section || !target) return undefined;

    const place = (x, y) => {
      target.style.setProperty('--lx', `${x.toFixed(1)}px`);
      target.style.setProperty('--ly', `${y.toFixed(1)}px`);
    };

    if (reduced) {
      const box = target.getBoundingClientRect();
      place(box.width * 0.3, box.height * 0.5);
      return undefined;
    }

    let frame = 0;
    let visible = true;
    let pointer = null;
    let current = null;

    const tick = (time) => {
      if (!visible) return;
      const box = target.getBoundingClientRect();
      const goal = pointer ?? {
        x: box.width * (0.5 + 0.38 * Math.sin(time / 2600)),
        y: box.height * (0.5 + 0.32 * Math.sin(time / 1900 + 1)),
      };
      current = current ?? goal;
      current = { x: current.x + (goal.x - current.x) * 0.12, y: current.y + (goal.y - current.y) * 0.12 };
      place(current.x, current.y);
      frame = requestAnimationFrame(tick);
    };

    const onMove = (event) => {
      if (event.pointerType === 'touch') return;
      const box = target.getBoundingClientRect();
      pointer = { x: event.clientX - box.left, y: event.clientY - box.top };
    };
    const onLeave = () => {
      pointer = null;
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(frame);
      if (visible) frame = requestAnimationFrame(tick);
    });
    observer.observe(section);

    section.addEventListener('pointermove', onMove);
    section.addEventListener('pointerleave', onLeave);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      section.removeEventListener('pointermove', onMove);
      section.removeEventListener('pointerleave', onLeave);
    };
  }, [sectionRef, targetRef, reduced]);
}
