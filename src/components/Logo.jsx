import { brand } from '../content/site';
import { useLang } from '../i18n/LangContext';

// A diya flame inside a temple arch, with the name beside it.
export function LogoMark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path d="M9 44V22C9 11.5 15.5 5 24 5s15 6.5 15 17v22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 13c3.6 4.2 7 7.4 7 12.4a7 7 0 0 1-14 0c0-2.8 1.4-4.600 2.900-6.200.4 1.600 1.300 2.800 2.600 3.400-.4-3.600.6-6.600 1.500-9.600z" fill="#E3A21A" />
      <path d="M15 40h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ stacked = false }) {
  const { pick } = useLang();
  return (
    <span className={`logo ${stacked ? 'logo--stacked' : ''}`}>
      <LogoMark className="logo__mark" />
      <span className="logo__word">
        <span className="logo__name">{pick({ en: brand.name, hi: brand.nameHi })}</span>
        <span className="logo__sub">{pick(brand.tagline)}</span>
      </span>
    </span>
  );
}
