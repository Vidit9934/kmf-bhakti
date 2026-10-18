import Arch from '../components/Arch';
import ConsultBand from '../components/ConsultBand';
import Mandala from '../components/Mandala';
import PageBanner from '../components/PageBanner';
import Stats from '../components/Stats';
import { about } from '../content/site';
import { useLang } from '../i18n/LangContext';

export default function About() {
  const { t, pick } = useLang();
  const [first, ...rest] = about.paragraphs;
  return (
    <>
      <PageBanner
        photo="templeDome"
        title={t('about.title')}
        crumbs={[{ to: '/', label: t('nav.home') }, { label: t('page.about') }]}
      />

      <section className="band band--peach band--scallop" style={{ '--band': 'var(--peach)' }} aria-label={t('about.title')}>
        <Mandala className="orn orn--left" />
        <div className="container split">
          <div className="split__stack">
            <Arch name="diyasFlowers" className="split__arch" ratio="4 / 5" />
            <p className="since">
              <span>{t('about.since')}</span>
              <strong>{about.founded}</strong>
            </p>
          </div>
          <div className="split__text">
            <p className="lead lead--big">{pick(first)}</p>
            {rest.map((paragraph) => (
              <p key={paragraph.en.slice(0, 20)} className="prose">
                {pick(paragraph)}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--maroon pattern-dark" aria-labelledby="about-stats">
        <div className="container">
          <h2 id="about-stats" className="title title--light">
            {t('stats.title')}
          </h2>
          <p className="lead lead--light">{t('stats.lead')}</p>
          <Stats />
        </div>
      </section>

      <ConsultBand />
    </>
  );
}
