import React from 'react';

// export interface ITodo {
//   id: number;
//   title: string;
//   description: string;
//   status: boolean;
// }
// export type TodoContextType = {
//   todos: ITodo[];
//   saveTodo: (todo: ITodo) => void;
//   updateTodo: (id: number) => void;
// };
type ILang = 'en' | 'he';
type ILanguageContext = [lang: ILang, changeLanguage: (lang: ILang) => void];

// type ILanguageContext = [string, React.Dispatch<React.SetStateAction<string>>];

// export const TodoContext = React.createContext<TodoContextType | null>(null);
// export const LanguageContext = React.createContext<ILanguageContext>([
//   'en',
//   () => null,
// ]);

export const LanguageContext = React.createContext<ILanguageContext | null>(
  null
);

function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = React.useState<ILang>('en');

  const changeLanguage = React.useCallback((lang: ILang) => {
    setLang(lang);
  }, []);

  return (
    <LanguageContext.Provider value={[lang, changeLanguage]}>
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
