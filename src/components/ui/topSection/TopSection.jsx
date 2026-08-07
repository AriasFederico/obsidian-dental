import { motion } from 'framer-motion';
import { iconMap } from '../../../iconMap';
import styles from './TopSection.module.scss';

export const TopSection = ({
  text,
  iconLeft,
  iconRight,
  className = '',
  iconLeftClassName = '',
  iconRightClassName = '',
}) => {
  const IconLeft = iconMap[iconLeft];
  const IconRight = iconMap[iconRight];
  return (
    <motion.div
      className={`${styles.topSection} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.15 }}
    >
      {IconLeft && <IconLeft className={iconLeftClassName} />}
      <span className={styles.text}>{text?.toUpperCase()}</span>
      {IconRight && <IconRight className={iconRightClassName} />}
    </motion.div>
  );
};
