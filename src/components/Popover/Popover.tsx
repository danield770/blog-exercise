import React from 'react';
import styles from './Popover.module.css';
import { useClickAway } from '@uidotdev/usehooks';

function Popover({ Icon, options }: { Icon: any; options: string[] }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = useClickAway(() => {
    setIsOpen(false);
  });
  function openOnlyIfClosed() {
    // !isOpen && setIsOpen(true);
    if (!isOpen) {
      setIsOpen(true);
    }
  }
  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.lang}>
      <Icon onClick={toggleOpen} />
      {isOpen && (
        <ul className={styles.languageList} ref={ref}>
          {options.length > 0 &&
            options.map((option) => (
              <li
                key={option}
                className={styles.language}
                onClick={() => setIsOpen(false)}
              >
                {option}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
export default Popover;
