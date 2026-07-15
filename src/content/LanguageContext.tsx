import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

export type Language = 'en' | 'id';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const storageKey = 'arkode-language';
const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function readInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  return window.localStorage.getItem(storageKey) === 'id' ? 'id' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(readInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(storageKey, language);
    document.documentElement.lang = language === 'id' ? 'id' : 'en';
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage } = useLanguage();
  const options: Language[] = ['en', 'id'];

  return (
    <div
      className="inline-flex rounded-md border border-line bg-white p-1 shadow-sm"
      role="group"
      aria-label="Language selector"
    >
      {options.map((option) => {
        const active = language === option;

        return (
          <button
            key={option}
            type="button"
            onClick={() => setLanguage(option)}
            className={[
              'rounded px-2.5 py-1.5 text-xs font-bold uppercase tracking-[0.12em] transition',
              compact ? 'min-w-10' : 'min-w-11',
              active ? 'bg-accent text-white' : 'text-slate-600 hover:bg-paper hover:text-navy',
            ].join(' ')}
            aria-pressed={active}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
