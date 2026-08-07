import { ButtonCta } from '../';
import styles from './ServiceCard.module.scss';

export const ServiceCard = ({ data }) => {
  return (
    <div className={styles.service}>
      <div className={styles.media}>
        <img src={data.img} alt={data.name} className={styles.img} />
        <span className={styles.code}>{data.code}</span>
      </div>
      {/*  */}
      <div className={styles.content}>
        <h3 className={styles.name}>{data.name}</h3>
        <p className={styles.desc}>{data.desc}</p>
        <a href={data.cta} className={styles.cta}>
          RESERVAR CONSULTA -
        </a>
      </div>
    </div>
  );
};
