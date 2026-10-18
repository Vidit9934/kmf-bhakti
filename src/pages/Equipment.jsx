import Arch from '../components/Arch';
import ConsultBand from '../components/ConsultBand';
import PageBanner from '../components/PageBanner';
import { equipment } from '../content/site';
import { useLang } from '../i18n/LangContext';

export default function Equipment() {
  const { t, pick } = useLang();
  return (
    <>
      <PageBanner
        photo="rig"
        title={t('equipment.title')}
        lead={t('equipment.lead')}
        crumbs={[{ to: '/', label: t('nav.home') }, { label: t('page.equipment') }]}
      />

      <div className="band band--night">
        <div className="container">
          {equipment.map((group, index) => (
            <section key={group.id} className={`gear ${index % 2 ? 'gear--flip' : ''}`} aria-labelledby={`gear-${group.id}`}>
              <Arch name={group.photo} className="gear__arch" ratio="4 / 5" />
              <div className="gear__body">
                <h2 id={`gear-${group.id}`} className="title title--light">
                  {pick(group.title)}
                </h2>
                <ul className="spec">
                  {group.items.map((item) => (
                    <li key={`${pick(item.maker)}-${pick(item.model)}`} className="spec__row">
                      <span className="spec__maker">{pick(item.maker)}</span>
                      <span className="spec__model">{pick(item.model)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>

      <ConsultBand />
    </>
  );
}
