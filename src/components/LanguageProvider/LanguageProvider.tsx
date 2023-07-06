import React from 'react';

type ILang = 'English' | 'עברית';
type ILangInitial = 'en' | 'he';
type ILanguageContext = {
  lang: ILang;
  initial: ILangInitial;
  changeLanguage: (lang: ILang) => void;
  isRTL: boolean;
};

export const LanguageContext = React.createContext<ILanguageContext | null>(
  null
);

function LanguageProvider({ children }: { children: React.ReactNode }) {
  const savedLang: string | null = localStorage.getItem('lang');
  const [lang, setLang] = React.useState<ILang>(savedLang as ILang | 'English');

  const changeLanguage = React.useCallback((lang: ILang) => {
    setLang(lang);
  }, []);

  const initials = {
    English: 'en' as const,
    עברית: 'he' as const,
  };
  const initial: ILangInitial = initials[lang];
  const rtlLanguages = ['he']; // add more as necessary
  const isRTL = rtlLanguages.includes(initial);

  React.useEffect(() => {
    window.document.documentElement.setAttribute('lang', initial);
    window.localStorage.setItem('lang', lang);
  }, [initial]);

  return (
    <LanguageContext.Provider value={{ lang, initial, changeLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const data = React.useContext(LanguageContext);

  if (!data) {
    throw new Error('Cannot consume lang context without a LanguageProvider'); // if you try to consume the context with no provider
  }

  return data;
}

export default LanguageProvider;
