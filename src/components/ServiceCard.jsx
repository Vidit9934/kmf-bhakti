import { useLang } from '../i18n/LangContext';
import Arch from './Arch';
import { IconArrow } from './Icons';
import { Link } from './SiteLink';

// One service as an arch-framed card that links to its own page.
export default function ServiceCard({ service, step }) {
  const { t, pick } = useLang();
  return (
    <Link to={`/services/${service.slug}`} className="svc-card">
      <div className="svc-card__media">
        <Arch name={service.photo} ratio="4 / 5" />
        {step && <span className="svc-card__step" aria-hidden="true">{step}</span>}
        {service.isNew && <span className="badge svc-card__badge">{t('services.new')}</span>}
      </div>
      <h3 className="svc-card__title">{pick(service.title)}</h3>
      <p className="svc-card__text">{pick(service.short)}</p>
      <span className="svc-card__more">
        {t('services.view')}
        <IconArrow />
      </span>
    </Link>
  );
}
