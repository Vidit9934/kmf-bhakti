const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
};

function icon(children) {
  return function Icon(props) {
    return (
      <svg {...base} {...props}>
        {children}
      </svg>
    );
  };
}

export const IconLive = icon(
  <>
    <circle cx="12" cy="12" r="2.2" />
    <path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M4.9 4.9a10 10 0 0 0 0 14.2M19.1 4.9a10 10 0 0 1 0 14.2" />
  </>,
);
export const IconEvents = icon(
  <>
    <rect x="3.5" y="5" width="17" height="15" rx="2" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
    <circle cx="12" cy="15" r="1.4" />
  </>,
);
export const IconCelebrity = icon(<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.6l1-5.8L3.5 9.7l5.9-.9L12 3.5z" />);
export const IconSocial = icon(
  <>
    <circle cx="6" cy="12" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <circle cx="18" cy="18" r="2.5" />
    <path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6" />
  </>,
);
export const IconEditing = icon(
  <>
    <rect x="3.5" y="6" width="17" height="13" rx="2" />
    <path d="M3.5 10.5h17M8 6l-2 4.5M13 6l-2 4.5M18 6l-2 4.5" />
  </>,
);
export const IconAudio = icon(
  <>
    <rect x="9" y="3.5" width="6" height="11" rx="3" />
    <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M8.5 21h7" />
  </>,
);
export const IconPromotion = icon(
  <>
    <path d="M4 10v4a1 1 0 0 0 1 1h2.5l7 4V5l-7 4H5a1 1 0 0 0-1 1z" />
    <path d="M18.5 9.5a4 4 0 0 1 0 5" />
  </>,
);
export const IconDistribution = icon(
  <>
    <path d="M3.5 12l17-8-6.5 16-2.8-6.7L3.5 12z" />
    <path d="M10.7 13.3l4.3-4.3" />
  </>,
);

export const IconFacebook = icon(<path d="M14 8h2.5V4.5H14A3.5 3.5 0 0 0 10.5 8v2H8v3.5h2.5V20H14v-6.5h2.4l.6-3.5H14V8.4c0-.2.1-.4.3-.4z" />);
export const IconX = icon(<path d="M4.5 4.5l15 15M19.5 4.5l-15 15" />);
export const IconInstagram = icon(
  <>
    <rect x="4" y="4" width="16" height="16" rx="4.5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="16.8" cy="7.2" r=".6" fill="currentColor" />
  </>,
);
export const IconYoutube = icon(
  <>
    <rect x="3" y="6" width="18" height="12" rx="3.5" />
    <path d="M10.5 9.5v5l4.2-2.5-4.2-2.5z" />
  </>,
);
export const IconLinkedin = icon(
  <>
    <rect x="4" y="9.5" width="3.2" height="10" />
    <circle cx="5.6" cy="5.8" r="1.8" />
    <path d="M10.5 19.5v-10h3v1.5c.7-1.1 1.8-1.7 3.2-1.7 2.4 0 3.8 1.5 3.8 4.4v5.8h-3.2v-5.2c0-1.2-.5-2-1.6-2s-2 .8-2 2.2v5H10.5z" />
  </>,
);
export const IconMail = icon(
  <>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
    <path d="M4 7l8 6 8-6" />
  </>,
);
export const IconPhone = icon(<path d="M6.5 4h3l1.5 4-2 1.3a10 10 0 0 0 5.7 5.7l1.3-2 4 1.5v3a2 2 0 0 1-2 2A14.5 14.5 0 0 1 4.5 6a2 2 0 0 1 2-2z" />);
export const IconPin = icon(
  <>
    <path d="M12 21s6.5-5.6 6.5-11a6.5 6.5 0 0 0-13 0c0 5.4 6.5 11 6.5 11z" />
    <circle cx="12" cy="10" r="2.3" />
  </>,
);
export const IconArrow = icon(<path d="M5 12h14M13 6l6 6-6 6" />);
export const IconArrowLeft = icon(<path d="M19 12H5M11 6l-6 6 6 6" />);
export const IconArrowUp = icon(<path d="M12 19V5M6 11l6-6 6 6" />);
export const IconPlus = icon(<path d="M12 5v14M5 12h14" />);

// Lotus used as the list bullet and star-like separator.
export function IconLotus(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M12 3c1.8 2.6 2.7 5 2.7 7.2 0 1.6-.5 3-1.4 4.2.7-.2 1.4-.3 2.1-.3 1.7-1.6 3.9-2.5 6.6-2.6-.4 2.8-1.8 5.1-4 6.6-1.7 1.2-3.8 1.9-6 1.9s-4.3-.7-6-1.9c-2.2-1.5-3.6-3.8-4-6.6 2.7.1 4.9 1 6.6 2.6.7 0 1.4.1 2.1.3-.9-1.2-1.4-2.6-1.4-4.2C9.3 8 10.2 5.6 12 3z"
      />
    </svg>
  );
}

export const serviceIcons = {
  live: IconLive,
  events: IconEvents,
  celebrity: IconCelebrity,
  social: IconSocial,
  editing: IconEditing,
  audio: IconAudio,
  promotion: IconPromotion,
  distribution: IconDistribution,
};

export const socialIcons = {
  facebook: IconFacebook,
  x: IconX,
  instagram: IconInstagram,
  youtube: IconYoutube,
  linkedin: IconLinkedin,
};
