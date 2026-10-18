import { useLang } from '../i18n/LangContext';
import Mandala from './Mandala';
import { Link } from './SiteLink';

// The closing call to action used at the foot of the inner pages.
export default function ConsultBand() {
  const { t } = useLang();
  return (
    <section className="band band--kesar consult" aria-labelledby="consult-title">
      <Mandala className="consult__mandala consult__mandala--a" />
      <Mandala className="consult__mandala consult__mandala--b" />
      <div className="container container--narrow consult__inner">
        <h2 id="consult-title" className="title title--light">
          {t('cta.title')}
        </h2>
        <p className="consult__text">{t('cta.text')}</p>
        <Link className="btn btn--gold btn--lg" to="/contact">
          {t('cta.button')}
        </Link>
      </div>
    </section>
  );
}
