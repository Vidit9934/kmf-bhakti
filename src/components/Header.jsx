import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLang } from '../i18n/LangContext';
import Logo from './Logo';
import Menu from './Menu';
import { Link } from './SiteLink';

export default function Header() {
  const { t, toggle, lang } = useLang();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const burger = useRef(null);
  const wasOpen = useRef(false);

  // Every page opens on a dark photo, so the header is light until the page is scrolled.
  const light = !scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Give focus back to the burger after the menu closes.
  useEffect(() => {
    if (wasOpen.current && !open) burger.current?.focus();
    wasOpen.current = open;
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <header className={`header ${light ? 'header--light' : 'header--solid'}`}>
        <Link to="/" className="header__logo" aria-label={`${t('nav.home')}`}>
          <Logo />
        </Link>
        <div className="header__actions">
          <button
            type="button"
            className="lang-toggle"
            onClick={toggle}
            aria-label={t('lang.label')}
            lang={lang === 'en' ? 'hi' : 'en'}
          >
            {t('lang.switch')}
          </button>
          <Link to="/contact" className="btn btn--gold header__cta">
            {t('nav.getStarted')}
          </Link>
          <button
            ref={burger}
            type="button"
            className={`burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? t('menu.close') : t('menu.open')}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      <Menu open={open} onClose={close} />
    </>
  );
}
