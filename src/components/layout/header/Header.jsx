import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BsList, BsX } from 'react-icons/bs';
import { ButtonCta } from '../../ui/button/ButtonCta'; // importar donde esté
import styles from './Header.module.scss';

export const Header = ({ data }) => {
  const { nav_links } = data;
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const BurgerIcon = isOpen ? BsX : BsList;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        // cambiar el tamaño del maxwidth del header
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* LOGO_COMPONENT */}
        <a href={'/'} className={styles.logo} onClick={() => setIsOpen(false)}>
          {/* img si aplica */}
          Obsidian · Dental
        </a>

        <nav
          className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {nav_links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={styles.link}
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * i, duration: 0.2 }}
            >
              {link.text}
            </motion.a>
          ))}
        </nav>

        <button
          className={styles.burger}
          onClick={toggleMenu}
          aria-label='Menu'
          type='button'
        >
          <BurgerIcon className={styles.icon} />
        </button>
      </div>
    </header>
  );
};
