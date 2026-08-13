import { ServiceCard, TopSection } from '../../ui';
import { SectionLayout } from '../';
import styles from './ServicesSection.module.scss';
export const ServicesSection = ({ data }) => {
  const { topSection, text, title, items } = data;
  return (
    <SectionLayout id='services' bgVariant={'soft'}>
      <div className={styles.container}>
        <div className={styles.header}>
          <TopSection text={topSection} />
          <h2 className={styles.title}>{title}</h2>
          <p>{text}</p>
        </div>

        <div className={styles.items}>
          {items?.map((s) => (
            <ServiceCard data={s} key={s.code} />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
