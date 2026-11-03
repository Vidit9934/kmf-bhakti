import PageBanner from '../components/PageBanner';
import { contact } from '../content/site';
import { legal } from '../content/legal';
import { useLang } from '../i18n/LangContext';

// One template for /privacy and /terms; `doc` is a key of `legal`.
export default function LegalPage({ doc }) {
  const { t, pick } = useLang();
  const { updated, sections } = legal[doc];
  return (
    <>
      <PageBanner
        photo="diyaSingle"
        title={t(`${doc}.title`)}
        lead={t(`${doc}.lead`)}
        crumbs={[{ to: '/', label: t('nav.home') }, { label: t(`page.${doc}`) }]}
      />
      <div className="band band--ivory pattern">
        <div className="container container--narrow legal">
          <p className="legal__updated">
            {t('legal.updated')}: {pick(updated)}
          </p>
          {sections.map((s, i) => (
            <section key={i}>
              <h2>{pick(s.h)}</h2>
              {s.p?.map((para, j) => (
                <p key={j}>{pick(para)}</p>
              ))}
              {s.ul && (
                <ul>
                  {s.ul.map((item, j) => (
                    <li key={j}>{pick(item)}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <section>
            <h2>{t('legal.contact')}</h2>
            <p>
              {pick(contact.office)}
              <br />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
