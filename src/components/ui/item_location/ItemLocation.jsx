import { iconMap } from '../../../iconMap';
import styles from './ItemLocation.module.scss';

export const ItemLocation = ({ icon, name, desc }) => {
  const Icon = iconMap[icon];
  return (
    <div className={styles.ItemLocation}>
      <div className={styles.flex}>
        <Icon size={16} />
        <span className={styles.name}>{name.toUpperCase()}</span>
      </div>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};
