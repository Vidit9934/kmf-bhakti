import ContactForm from '../components/ContactForm';
import { IconMail, IconPhone, IconPin, socialIcons } from '../components/Icons';
import PageBanner from '../components/PageBanner';
import { contact } from '../content/site';
import { useLang } from '../i18n/LangContext';

export default function Contact() {
  const { t, pick } = useLang();
  return (
    <>
      <PageBanner
        photo="diyasFlowers"
        title={t('contact.title')}
        lead={t('contact.lead')}
        crumbs={[{ to: '/', label: t('nav.home') }, { label: t('page.contact') }]}
      />

      <div className="band band--ivory pattern">
        <div className="container contact">
          <div className="contact__info">
            <h2 className="subtitle subtitle--left">{t('contact.touch')}</h2>
            <ul className="contact__list">
              <li>
                <IconMail />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <IconPhone />
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
              </li>
              <li>
                <IconPin />
                <span>
                  {pick(contact.office)}
                  <a className="contact__map" href={contact.mapsUrl} target="_blank" rel="noopener noreferrer">
                    {t('contact.maps')}
                  </a>
                </span>
              </li>
            </ul>

            <ul className="socials socials--dark" aria-label={t('contact.social')}>
              {contact.social.map((item) => {
                const Icon = socialIcons[item.id];
                return (
                  <li key={item.id}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="contact__panel">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
