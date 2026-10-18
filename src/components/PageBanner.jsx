import { useRef } from 'react';
import { useLang } from '../i18n/LangContext';
import { useDiyaLight } from '../lib/useDiyaLight';
import { useReducedMotion } from '../lib/useReducedMotion';
import LitText from './LitText';
import Photo from './Photo';
import { Link } from './SiteLink';

// The dark photo banner every inner page opens with: breadcrumb, title and an optional lead.
// The title lights up under the cursor, like the hero word.
export default function PageBanner({ photo, title, lead, crumbs = [], isNew = false }) {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  useDiyaLight(sectionRef, titleRef, reduced);

  return (
    <header className="banner" ref={sectionRef}>
      <div className="banner__photo">
        <Photo name={photo} decorative eager />
      </div>
      <div className="banner__shade" />
      <div className="banner__content container">
        {crumbs.length > 0 && (
          <nav className="crumbs" aria-label={t('crumb.label')}>
            <ol>
              {crumbs.map((crumb, index) => (
                <li key={crumb.label}>
                  {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
                  {index < crumbs.length - 1 && <span className="crumbs__sep" aria-hidden="true">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="banner__title">
          <LitText targetRef={titleRef}>{title}</LitText>
          {isNew && <span className="badge badge--lg">{t('services.new')}</span>}
        </h1>
        {lead && <p className="banner__lead">{lead}</p>}
      </div>
    </header>
  );
}
