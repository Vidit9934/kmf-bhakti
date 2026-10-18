import { brand, contact } from '../content/site';
import { services } from '../content/services';
import { useLang } from '../i18n/LangContext';
import { socialIcons } from './Icons';
import Logo from './Logo';
import Mandala from './Mandala';
import { PAGES } from './Menu';
import { Link } from './SiteLink';

export default function Footer() {
  const { t, pick } = useLang();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Mandala className="footer__mandala" />
            <Link to="/" aria-label={t('nav.home')}>
              <Logo stacked />
            </Link>
          </div>

          <div className="footer__col footer__links">
            <nav aria-label={t('footer.links')}>
              <h2>{t('footer.links')}</h2>
              <ul>
                {PAGES.map(({ to, key }) => (
                  <li key={to}>
                    <Link to={to}>{t(key)}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label={t('footer.services')}>
              <h2>{t('footer.services')}</h2>
              <ul>
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link to={`/services/${service.slug}`}>{pick(service.title)}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="footer__col footer__social">
            <h2>{t('footer.follow')}</h2>
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

        <div className="footer__legal">
          <span>
            © {new Date().getFullYear()} {pick({ en: brand.name, hi: brand.nameHi })}. {t('footer.rights')}
          </span>
          <Link to="/credits">{t('footer.credits')}</Link>
        </div>
      </div>
    </footer>
  );
}
