import { useEffect, useRef, useState } from 'react';
import { channels, hero } from '../content/site';
import { heroSlides } from '../content/photos';
import { useLang } from '../i18n/LangContext';
import { useDiyaLight } from '../lib/useDiyaLight';
import { useReducedMotion } from '../lib/useReducedMotion';
import { brand } from '../content/site';
import LitText from './LitText';
import Photo from './Photo';
import { Link } from './SiteLink';

const SLIDE_MS = 7000;

export default function Hero() {
  const { t, pick } = useLang();
  const reduced = useReducedMotion();
  const sectionRef = useRef(null);
  const wordRef = useRef(null);
  const [active, setActive] = useState(0);
  const [focusPaused, setFocusPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [onScreen, setOnScreen] = useState(true);

  useDiyaLight(sectionRef, wordRef, reduced);

  // Pause when the hero is off screen, so nothing runs in the background.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node || !('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // `active` is a dependency, so choosing a slide restarts the 7 second timer.
  useEffect(() => {
    if (reduced || focusPaused || userPaused || !onScreen) return undefined;
    const id = setTimeout(() => setActive((index) => (index + 1) % heroSlides.length), SLIDE_MS);
    return () => clearTimeout(id);
  }, [active, reduced, focusPaused, userPaused, onScreen]);

  const channel = channels[active];

  return (
    <section
      id="home"
      className="hero"
      ref={sectionRef}
      aria-labelledby="hero-title"
      onFocus={(event) => event.target.matches(':focus-visible') && setFocusPaused(true)}
      onBlur={() => setFocusPaused(false)}
    >
      {heroSlides.map((name, index) => (
        <div key={name} className={`hero__slide ${index === active ? 'is-active' : ''}`} aria-hidden={index === active ? undefined : 'true'}>
          <Photo name={name} className="hero__img" eager={index === 0} />
        </div>
      ))}
      <div className="hero__shade" />

      <div className="hero__content container">
        <p className="hero__role">{pick(brand.tagline)}</p>

        <div className="hero__word" lang="hi" aria-hidden="true" style={{ '--chars': channel.hi.length }}>
          <LitText targetRef={wordRef}>{channel.hi}</LitText>
        </div>
        <p className="hero__word-en">{channel.en}</p>

        <h1 id="hero-title" className="hero__title">
          {pick(hero.headline)}
        </h1>
        <p className="hero__lead">{pick(hero.lead)}</p>

        <div className="hero__cta">
          <Link className="btn btn--ghost" to="/about">
            {t('hero.about')}
          </Link>
          <Link className="btn btn--gold" to="/services">
            {t('hero.services')}
          </Link>
        </div>
      </div>

      <div className="hero__dots" role="group" aria-label={t('hero.slide')}>
        {!reduced && (
          <button
            type="button"
            className="hero__pause"
            aria-pressed={userPaused}
            aria-label={userPaused ? t('hero.play') : t('hero.pause')}
            onClick={() => setUserPaused((value) => !value)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              {userPaused ? <path d="M8 5v14l11-7z" fill="currentColor" /> : <path d="M7 5h3.5v14H7zM13.500 5H17v14h-3.500z" fill="currentColor" />}
            </svg>
          </button>
        )}
        {heroSlides.map((name, index) => (
          <button
            key={name}
            type="button"
            className={index === active ? 'is-active' : ''}
            aria-label={`${t('hero.slide')} ${index + 1}: ${channels[index].en}`}
            aria-pressed={index === active}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  );
}
