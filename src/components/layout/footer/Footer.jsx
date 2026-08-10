import styles from './Footer.module.scss';
export const Footer = ({ data }) => {
  return (
    <footer className={styles.footer}>
      <a href='/' className={styles.logo}>
        {data.name}
      </a>
      {/* <Logo text={name} size='sm' url={'#'} /> */}
      <p className={styles.copyright}>
        © 2026 {name}. Todos los derechos reservados.
      </p>
    </footer>
  );
};
