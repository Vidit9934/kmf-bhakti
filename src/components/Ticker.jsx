import { useLang } from '../i18n/LangContext';

const REPEATS = 6;

function Star() {
  return (
    <svg className="ticker__star" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 0c1 6 5 11 12 12-7 1-11 6-12 12-1-6-5-11-12-12C7 11 11 6 12 0z" fill="currentColor" />
    </svg>
  );
}

// A gold ticker with a wavy gold edge. `next` is the colour of the band that follows,
// which shows beneath the wave.
export default function Ticker({ next = 'var(--ivory)' }) {
  const { t } = useLang();
  const run = Array.from({ length: REPEATS }, (_, index) => (
    <span className="ticker__item" key={index}>
      {t('ticker')}
      <Star />
    </span>
  ));
  return (
    <div className="ticker" aria-hidden="true" style={{ '--next': next }}>
      <div className="ticker__bar">
        <div className="ticker__track">
          {run}
          {run}
        </div>
      </div>
      <svg className="ticker__wave" viewBox="0 0 1440 80" preserveAspectRatio="none" focusable="false">
        <defs>
          <linearGradient id="goldWave" x1="0" x2="1">
            <stop offset="0" stopColor="#f6b73c" />
            <stop offset="1" stopColor="#c48a22" />
          </linearGradient>
        </defs>
        <path d="M0 0H1440V28C1130 92 470 -14 0 64Z" fill="url(#goldWave)" />
      </svg>
    </div>
  );
}
