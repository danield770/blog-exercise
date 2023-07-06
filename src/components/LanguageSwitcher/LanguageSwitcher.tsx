import styles from './LanguageSwitcher.module.css';
import LanguagePick from '../images/LanguageSVG';
import * as Popover from '@radix-ui/react-popover';
import { useLanguage } from '../LanguageProvider';

function LanguageSwitcher({
  languages,
}: {
  languages: Array<'English' | 'עברית'>;
}) {
  const { lang, changeLanguage } = useLanguage();
  return (
    <>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button aria-label='Choose Language' className={styles.lang}>
            <LanguagePick />
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className='PopoverContent'
            sideOffset={5}
            align='end'
          >
            <ul className={styles.languageList}>
              {languages.length > 0 &&
                languages.map((language) => (
                  <li key={language}>
                    <Popover.Close
                      className={styles.btnChoose}
                      aria-label='Close'
                    >
                      <div onClick={() => changeLanguage(language)}>
                        {lang === language && (
                          <span className={styles.check}>✓</span>
                        )}
                        {language}
                      </div>
                    </Popover.Close>
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
