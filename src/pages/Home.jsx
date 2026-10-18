import Arch from '../components/Arch';
import Hero from '../components/Hero';
import { IconArrow } from '../components/Icons';
import Mandala from '../components/Mandala';
import Quote from '../components/Quote';
import ServiceCard from '../components/ServiceCard';
import { Link } from '../components/SiteLink';
import Stats from '../components/Stats';
import Ticker from '../components/Ticker';
import ConsultBand from '../components/ConsultBand';
import { about, equipment, testimonials, verse } from '../content/site';
import { serviceGroups, services, servicesBySlug } from '../content/services';
import { useLang } from '../i18n/LangContext';

export default function Home() {
  const { t, pick } = useLang();
  const music = serviceGroups.find((group) => group.id === 'music');

  return (
    <>
      <Hero />

      <section className="band band--peach band--scallop" style={{ '--band': 'var(--peach)' }} aria-labelledby="home-about">
        <Mandala className="orn orn--left" />
        <Mandala className="orn orn--right" />
        <div className="container split">
          <Arch name="aartiPriest" className="split__arch" ratio="4 / 5" />
          <div className="split__text">
            <h2 id="home-about" className="title">
              {t('home.aboutTitle')}
            </h2>
            <p className="lead">{pick(about.paragraphs[0])}</p>
            <p className="prose">{pick(about.paragraphs[2])}</p>
            <Link className="text-link" to="/about">
              {t('home.aboutMore')}
              <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="band band--maroon pattern-dark" aria-labelledby="home-stats">
        <div className="container">
          <h2 id="home-stats" className="title title--light">
            {t('stats.title')}
          </h2>
          <p className="lead lead--light">{t('stats.lead')}</p>
          <Stats />
        </div>
      </section>

      <section className="band band--ivory pattern" aria-labelledby="home-services">
        <div className="container">
          <div className="section-head">
            <h2 id="home-services" className="title">
              {t('services.title')}
            </h2>
            <p className="lead">{t('services.lead')}</p>
          </div>
          <ul className="svc-grid">
            {services.map((service) => (
              <li key={service.slug}>
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
          <div className="actions">
            <Link className="btn btn--maroon" to="/services">
              {t('services.all')}
            </Link>
          </div>
        </div>
      </section>

      <section className="band band--night" aria-labelledby="home-music">
        <Mandala className="orn orn--center" />
        <div className="container">
          <div className="section-head section-head--light">
            <h2 id="home-music" className="title title--light">
              {t('music.title')}
            </h2>
            <p className="lead lead--light">{t('music.lead')}</p>
          </div>
          <ol className="path">
            {music.items.map((slug, index) => (
              <li key={slug} className="path__step">
                <ServiceCard service={servicesBySlug[slug]} step={index + 1} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Ticker next="var(--ivory)" />

      <section className="band band--ivory pattern" aria-labelledby="home-equipment">
        <div className="container">
          <div className="section-head">
            <h2 id="home-equipment" className="title">
              {t('equipment.title')}
            </h2>
            <p className="lead">{t('equipment.lead')}</p>
          </div>
          <ul className="gear-teasers">
            {equipment.map((group) => (
              <li key={group.id}>
                <Link to="/equipment" className="gear-teaser">
                  <Arch name={group.photo} ratio="4 / 5" />
                  <h3>{pick(group.title)}</h3>
                  <p>
                    {group.items.length} {t('equipment.items')}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="actions">
            <Link className="btn btn--outline" to="/equipment">
              {t('equipment.see')}
            </Link>
          </div>
        </div>
      </section>

      <section className="band band--kesar band--scallop" style={{ '--band': 'var(--kesar)' }} aria-labelledby="home-voice">
        <div className="container container--narrow">
          <h2 id="home-voice" className="title title--light">
            {t('testimonials.title')}
          </h2>
          <Quote item={testimonials[0]} />
          <div className="actions">
            <Link className="btn btn--ghost" to="/testimonials">
              {t('testimonials.more')}
            </Link>
          </div>
        </div>
      </section>

      <section className="band band--ivory pattern verse-band" aria-label={pick(verse.source)}>
        <div className="container container--narrow center">
          <p className="verse__sa" lang="sa">
            {verse.sanskrit}
          </p>
          <p className="verse__meaning">{pick(verse.meaning)}</p>
          <p className="verse__src">{pick(verse.source)}</p>
        </div>
      </section>

      <ConsultBand />
    </>
  );
}
