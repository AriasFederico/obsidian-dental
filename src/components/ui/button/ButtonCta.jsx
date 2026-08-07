import { iconMap } from '../../../iconMap';
import styles from './ButtonCta.module.scss';

export const ButtonCta = ({
  text,
  icon,
  iconLeft,
  onCLick,
  href,
  type = 'button',
  variant = 'primary',
  size = 'md',
}) => {
  // Si tiene 'href', es un enlace. Si no, es un botón.
  const Component = href ? 'a' : 'button';
  const Icon = iconMap[icon];
  const IconLeft = iconMap[iconLeft];

  return (
    <Component
      href={href}
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      onClick={onCLick}
      type={!href ? type : undefined} // Solo para botones
    >
      {iconLeft && <IconLeft className={styles.icon} />}
      {text || 'Click aquí'}
      {icon && <Icon className={styles.icon} />}
    </Component>
  );
};
