import { ThemeProps } from '../../interface/ThemeInterfaces';
import styles from './ButtonTheme.module.css';

export const ButtonTheme = ({ theme, setTheme }: ThemeProps) => {
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <>
      <button className={styles.theme} onClick={toggleTheme}>
        {theme === 'light' ? (
          <i className="fas fa-moon"></i>
        ) : (
          <i className="fas fa-sun"></i>
        )}
      </button>
    </>
  );
};
