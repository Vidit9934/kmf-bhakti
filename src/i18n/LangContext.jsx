import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ui } from './ui';

const STORAGE_KEY = 'kmf-lang';
const LangContext = createContext(null);

// Read before first render so a returning Hindi visitor never sees an English flash.
function initialLang() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'hi' || saved === 'en') return saved;
  } catch {
    // storage blocked: fall through to English
  }
  return 'en';
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // storage blocked: the choice still applies for this visit
    }
  }, []);

  const value = useMemo(() => {
    // UI string by key, falling back to English and then the key itself.
    const t = (key) => ui[lang][key] ?? ui.en[key] ?? key;
    // Content value: a plain string is returned as is, { en, hi } picks the active language.
    const pick = (value) => (value && typeof value === 'object' ? value[lang] ?? value.en : value);
    return { lang, setLang, toggle: () => setLang(lang === 'en' ? 'hi' : 'en'), t, pick };
  }, [lang, setLang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const value = useContext(LangContext);
  if (!value) throw new Error('useLang must be used inside <LangProvider>');
  return value;
}
