import Arch from '../components/Arch';
import ConsultBand from '../components/ConsultBand';
import { IconArrow, IconArrowLeft, IconLotus } from '../components/Icons';
import PageBanner from '../components/PageBanner';
import ServiceCard from '../components/ServiceCard';
import { Link } from '../components/SiteLink';
import { services, servicesBySlug } from '../content/services';
import { useLang } from '../i18n/LangContext';
import NotFound from './NotFound';

export default function ServiceDetail({ slug }) {
  const { t, pick } = useLang();
  const service = servicesBySlug[slug];
  if (!service) return <NotFound />;

  const index = services.findIndex((item) => item.slug === slug);
  const prev = services[(index - 1 + services.length) % services.length];
  const next = services[(index + 1) % services.length];
  const related = [next, services[(index + 2) % services.length], services[(index + 3) % services.length]].filter(
    (item) => item.slug !== slug,
  );

  return (
    <>
      <PageBanner
        photo={service.photo}
        title={pick(service.title)}
        isNew={service.isNew}
        crumbs={[
          { to: '/', label: t('nav.home') },
          { to: '/services', label: t('page.services') },
          { label: pick(service.title) },
        ]}
      />

      <article className="band band--ivory pattern">
        <div className="container detail">
          <Arch name={service.photo} className="detail__arch" ratio="4 / 5" />

          <div className="detail__body">
            <p className="lead detail__lead">{pick(service.text)}</p>

            <h2 className="subtitle subtitle--left">{t('services.covers')}</h2>
            <ul className="covers">
              {service.covers.map((item) => (
                <li key={item.en}>
                  <IconLotus className="covers__mark" />
                  <span>{pick(item)}</span>
                </li>
              ))}
            </ul>

            <h2 className="subtitle subtitle--left">{t('services.how')}</h2>
            <ol className="steps">
              {service.how.map((step, stepIndex) => (
                <li key={step.title.en}>
                  <span className="steps__n" aria-hidden="true">
                    {stepIndex + 1}
                  </span>
                  <div>
                    <h3>{pick(step.title)}</h3>
                    <p>{pick(step.text)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </article>

      <section className="band band--peach" aria-labelledby="more-services">
        <div className="container">
          <h2 id="more-services" className="title center">
            {t('services.related')}
          </h2>
          <ul className="svc-grid svc-grid--three">
            {related.map((item) => (
              <li key={item.slug}>
                <ServiceCard service={item} />
              </li>
            ))}
          </ul>
          <nav className="pager" aria-label={t('services.related')}>
            <Link to={`/services/${prev.slug}`} className="pager__link">
              <IconArrowLeft />
              <span>
                <small>{t('services.prev')}</small>
                {pick(prev.title)}
              </span>
            </Link>
            <Link to={`/services/${next.slug}`} className="pager__link pager__link--next">
              <span>
                <small>{t('services.next')}</small>
                {pick(next.title)}
              </span>
              <IconArrow />
            </Link>
          </nav>
        </div>
      </section>

      <ConsultBand />
    </>
  );
}
