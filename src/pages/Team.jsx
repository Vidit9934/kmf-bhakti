import ConsultBand from '../components/ConsultBand';
import { IconLinkedin, IconMail, IconX } from '../components/Icons';
import PageBanner from '../components/PageBanner';
import { team } from '../content/site';
import { useLang } from '../i18n/LangContext';

const GLOW = [
  ['70%', '20%'],
  ['26%', '24%'],
  ['76%', '66%'],
  ['30%', '72%'],
  ['58%', '34%'],
  ['42%', '58%'],
];

// Initials in a lamp-lit arch stand in for portraits until real photos are added to content/site.js.
function Portrait({ person, index, size }) {
  const { pick } = useLang();
  const [x, y] = GLOW[index % GLOW.length];
  return (
    <div className={`portrait portrait--${size}`} style={{ '--gx': x, '--gy': y }}>
      {person.photo ? <img src={person.photo} alt={pick(person.name)} loading="lazy" /> : <span aria-hidden="true">{person.initials}</span>}
    </div>
  );
}

function Links({ person }) {
  const { t, pick } = useLang();
  const { email, linkedin, x } = person.links;
  const who = pick(person.name);
  return (
    <ul className="founder__links" aria-label={who}>
      {linkedin && (
        <li>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${who}, ${t('team.linkedin')}`}>
            <IconLinkedin />
          </a>
        </li>
      )}
      {x && (
        <li>
          <a href={x} target="_blank" rel="noopener noreferrer" aria-label={`${who}, ${t('team.x')}`}>
            <IconX />
          </a>
        </li>
      )}
      {email && (
        <li>
          <a href={`mailto:${email}`} aria-label={`${who}, ${t('team.email')}`}>
            <IconMail />
          </a>
        </li>
      )}
    </ul>
  );
}

export default function Team() {
  const { t, pick } = useLang();
  return (
    <>
      <PageBanner
        photo="bells"
        title={t('team.title')}
        lead={t('team.lead')}
        crumbs={[{ to: '/', label: t('nav.home') }, { label: t('page.team') }]}
      />

      <div className="band band--ivory pattern">
        <div className="container">
          <ul className="founders">
            {team.founders.map((person, index) => (
              <li className="founder" key={person.name.en}>
                <Portrait person={person} index={index} size="lg" />
                <div>
                  <h2 className="founder__name">{pick(person.name)}</h2>
                  <p className="founder__role">{pick(person.role)}</p>
                  <p className="founder__bio">{pick(person.bio)}</p>
                  <Links person={person} />
                </div>
              </li>
            ))}
          </ul>

          <ul className="crew">
            {team.members.map((person, index) => (
              <li className="crew__member" key={person.name.en}>
                <Portrait person={person} index={index + 2} size="sm" />
                <h3>{pick(person.name)}</h3>
                <p>{pick(person.role)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ConsultBand />
    </>
  );
}
