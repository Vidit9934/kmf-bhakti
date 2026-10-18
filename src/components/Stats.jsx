import { useRef } from 'react';
import { stats } from '../content/site';
import { useLang } from '../i18n/LangContext';
import { useCountUp } from '../lib/useCountUp';
import { useInView } from '../lib/useInView';
import { useReducedMotion } from '../lib/useReducedMotion';

function Stat({ stat, play, reduced }) {
  const { pick } = useLang();
  const value = useCountUp(stat.value, play, { reduced });
  return (
    <li className="stat">
      <span className="stat__value" role="img" aria-label={`${stat.value}+ ${pick(stat.label)}`}>
        <span aria-hidden="true">
          {value}
          <span className="stat__plus">+</span>
        </span>
      </span>
      <span className="stat__label" aria-hidden="true">
        {pick(stat.label)}
      </span>
    </li>
  );
}

// The four headline numbers. They start at their final value, so they are right without
// JavaScript or motion; the count-up only plays once, when the list first scrolls into view.
export default function Stats() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const seen = useInView(ref, { threshold: 0.4 });
  return (
    <ul className="stats" ref={ref}>
      {stats.map((stat) => (
        <Stat key={stat.value} stat={stat} play={seen} reduced={reduced} />
      ))}
    </ul>
  );
}
