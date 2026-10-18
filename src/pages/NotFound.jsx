import PageBanner from '../components/PageBanner';
import { Link } from '../components/SiteLink';
import { useLang } from '../i18n/LangContext';

export default function NotFound() {
  const { t } = useLang();
  return (
    <>
      <PageBanner photo="diyaSingle" title={t('notfound.title')} crumbs={[{ to: '/', label: t('nav.home') }, { label: t('page.notfound') }]} />
      <div className="band band--ivory pattern">
        <div className="container container--narrow center">
          <p className="lead">{t('notfound.text')}</p>
          <div className="actions">
            <Link className="btn btn--maroon" to="/">
              {t('notfound.home')}
            </Link>
            <Link className="btn btn--outline" to="/services">
              {t('services.all')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
