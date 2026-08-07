import { ButtonCta, TopSection } from '../../ui';
import { SectionLayout } from '../';
import styles from './CtaSection.module.scss';

export const CtaSection = ({ data }) => {
  return (
    <SectionLayout>
      <div className={styles.container}>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.text}>{data.text}</p>
        <div className={styles.cta}>
          <ButtonCta
            text={data.cta.text}
            href={data.cta.cta}
            iconLeft={'cta'}
          />
        </div>
      </div>
    </SectionLayout>
  );
};
