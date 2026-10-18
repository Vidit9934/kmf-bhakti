import { useLang } from '../i18n/LangContext';

// A testimonial on a torn-paper card.
export default function Quote({ item }) {
  const { pick } = useLang();
  return (
    <figure className="quote">
      <blockquote>
        <p>{pick(item.quote)}</p>
      </blockquote>
      <figcaption>
        <strong>{pick(item.name)}</strong>
        <span>{pick(item.role)}</span>
      </figcaption>
    </figure>
  );
}
