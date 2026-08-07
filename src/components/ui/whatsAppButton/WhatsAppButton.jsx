import { ButtonCta } from '../button/ButtonCta';
import styles from './WhatsAppButton.module.scss';
export const WhatsAppButton = ({ data }) => {
  return (
    <div className={styles.whatsAppButton}>
      <ButtonCta text={data.text} href={data.cta} iconLeft={'cta'} />
    </div>
  );
};
