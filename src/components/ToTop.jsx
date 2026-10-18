import { useEffect, useState } from 'react';
import { useLang } from '../i18n/LangContext';
import { IconArrowUp } from './Icons';

export default function ToTop() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`to-top ${visible ? 'is-visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={t('top')}
      tabIndex={visible ? 0 : -1}
    >
      <IconArrowUp />
    </button>
  );
}
