// import React from 'react';
import styles from './LanguageSwitcher.module.css';
import LanguagePick from '../images/LanguageSVG';
// import Popover from '../Popover/Popover';
import * as Popover from '@radix-ui/react-popover';
// import * as Ariakit from '@ariakit/react';
import { useLanguage } from '../LanguageProvider';

interface Language {
  en: string;
  he: string;
}

function LanguageSwitcher({ languages }: { languages: Language }) {
  //   const popover = Ariakit.usePopoverStore();
  const [lang, setLang] = useLanguage();
  return (
    <>
      {/* <Ariakit.PopoverDisclosure store={popover} className={styles.lang}>
        <LanguagePick />
      </Ariakit.PopoverDisclosure>
      <Ariakit.Popover store={popover} className='popover'>
        <Ariakit.PopoverDescription>
          <ul className={styles.languageList}>
            {languages.length > 0 &&
              languages.map((language) => (
                <li key={language} className={styles.language}>
                  <button type='button' className={styles.btnCoose}>
                    {language}
                  </button>
                </li>
              ))}
          </ul>
        </Ariakit.PopoverDescription>
      </Ariakit.Popover> */}
      <Popover.Root>
        <Popover.Trigger asChild>
          <button className={styles.IconButton} aria-label='Choose Language'>
            <LanguagePick className={styles.lang} />
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className='PopoverContent'
            sideOffset={5}
            align='end'
          >
            <ul className={styles.languageList}>
              {Object.keys(languages).length > 0 &&
                Object.keys(languages).map((language) => (
                  <li key={language} className={styles.language}>
                    <input
                      id={`radio-${language}`}
                      type='radio'
                      name='radio-lang'
                      value={language}
                      checked={lang === language}
                      onChange={() =>
                        setLang(language as keyof typeof languages)
                      }
                    />
                    <label htmlFor={`radio-${language}`}>
                      {languages[language as keyof typeof languages]}
                    </label>
                  </li>
                ))}
            </ul>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}

export default LanguageSwitcher;
