import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { contact } from '../content/site';
import { services } from '../content/services';
import { useLang } from '../i18n/LangContext';
import { IconMail, IconPhone, socialIcons } from './Icons';
import Mandala from './Mandala';
import { Link, NavLink } from './SiteLink';

export const PAGES = [
  { to: '/', key: 'nav.home' },
  { to: '/services', key: 'nav.services' },
  { to: '/equipment', key: 'nav.equipment' },
  { to: '/about', key: 'nav.about' },
  { to: '/team', key: 'nav.team' },
  { to: '/testimonials', key: 'nav.testimonials' },
  { to: '/contact', key: 'nav.contact' },
];

const FOCUSABLE = '.header a, .header button, .menu a';

// Full-screen menu that opens as a circle from the burger. While open: Escape closes,
// Tab stays inside the header and menu, and the page behind does not scroll.
export default function Menu({ open, onClose }) {
  const { t, pick } = useLang();
  const { pathname } = useLocation();
  const firstLink = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = 'hidden';
    firstLink.current?.focus();

    const onKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;
      const items = [...document.querySelectorAll(FOCUSABLE)].filter((node) => node.offsetParent !== null);
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <nav id="site-menu" className={`menu ${open ? 'is-open' : ''}`} aria-label="Main" inert={open ? undefined : ''}>
      <Mandala className="menu__mandala" />
      <div className="menu__inner">
        <ul className="menu__pages" aria-label={t('menu.pages')}>
          {PAGES.map(({ to, key }, index) => (
            <li key={to} style={{ '--i': index }}>
              <NavLink
                to={to}
                end={to === '/'}
                ref={index === 0 ? firstLink : undefined}
                className={({ isActive }) => (isActive || (to === '/services' && pathname.startsWith('/services/')) ? 'is-active' : '')}
                onClick={onClose}
              >
                {t(key)}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="menu__side">
          <h2 className="menu__heading">{t('menu.services')}</h2>
          <ul className="menu__services">
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`} onClick={onClose}>
                  {pick(service.title)}
                  {service.isNew && <span className="badge">{t('services.new')}</span>}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="menu__contact">
            <li>
              <IconMail />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <IconPhone />
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
            </li>
          </ul>

          <ul className="socials" aria-label={t('contact.social')}>
            {contact.social.map((item) => {
              const Icon = socialIcons[item.id];
              return (
                <li key={item.id}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                    <Icon />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
