import ConsultBand from '../components/ConsultBand';
import PageBanner from '../components/PageBanner';
import Quote from '../components/Quote';
import { testimonials } from '../content/site';
import { useLang } from '../i18n/LangContext';

export default function Testimonials() {
  const { t } = useLang();
  return (
    <>
      <PageBanner
        photo="diyaRed"
        title={t('testimonials.title')}
        lead={t('testimonials.lead')}
        crumbs={[{ to: '/', label: t('nav.home') }, { label: t('page.testimonials') }]}
      />

      <div className="band band--kesar">
        <div className="container">
          <ul className="quote-grid">
            {testimonials.map((item) => (
              <li key={item.name.en}>
                <Quote item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ConsultBand />
    </>
  );
}
