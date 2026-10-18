import PageBanner from '../components/PageBanner';
import { photos } from '../content/photos';
import { useLang } from '../i18n/LangContext';

export default function Credits() {
  const { t, pick } = useLang();
  return (
    <>
      <PageBanner
        photo="diyaSingle"
        title={t('credits.title')}
        lead={t('credits.lead')}
        crumbs={[{ to: '/', label: t('nav.home') }, { label: t('page.credits') }]}
      />
      <div className="band band--ivory pattern">
        <div className="container container--narrow">
          <ul className="credits">
            {Object.entries(photos).map(([key, photo]) => (
              <li key={key}>
                <span>{pick(photo.alt)}</span>
                <a href={photo.credit.url} target="_blank" rel="noopener noreferrer">
                  {photo.credit.who} / Pexels
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
