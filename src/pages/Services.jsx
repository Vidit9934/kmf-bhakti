import ConsultBand from '../components/ConsultBand';
import PageBanner from '../components/PageBanner';
import ServiceCard from '../components/ServiceCard';
import { serviceGroups, servicesBySlug } from '../content/services';
import { useLang } from '../i18n/LangContext';

export default function Services() {
  const { t, pick } = useLang();
  return (
    <>
      <PageBanner
        photo="templeSpires"
        title={t('services.title')}
        lead={t('services.lead')}
        crumbs={[{ to: '/', label: t('nav.home') }, { label: t('page.services') }]}
      />

      <div className="band band--ivory pattern">
        <div className="container">
          {serviceGroups.map((group) => (
            <section key={group.id} className="svc-group" aria-labelledby={`group-${group.id}`}>
              <h2 id={`group-${group.id}`} className="subtitle">
                {pick(group.title)}
              </h2>
              {group.sequence ? (
                <ol className="path path--light">
                  {group.items.map((slug, index) => (
                    <li key={slug} className="path__step">
                      <ServiceCard service={servicesBySlug[slug]} step={index + 1} />
                    </li>
                  ))}
                </ol>
              ) : (
                <ul className={`svc-grid svc-grid--wide ${group.items.length === 2 ? 'svc-grid--two' : ''}`}>
                  {group.items.map((slug) => (
                    <li key={slug}>
                      <ServiceCard service={servicesBySlug[slug]} />
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>

      <ConsultBand />
    </>
  );
}
