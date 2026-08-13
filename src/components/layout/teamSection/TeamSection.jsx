import { TopSection } from '../../ui';
import { SectionLayout } from '../';
import styles from './TeamSection.module.scss';

export const TeamSection = ({ data }) => {
  return (
    <SectionLayout direction={'column'}>
      <div className={styles.header}>
        <TopSection text={data.top_section} />
        <h2>{data.title}</h2>
      </div>

      <div className={styles.items}>
        {data?.team?.map((e, index) => (
          <div key={index} className={styles.item}>
            <h3>{e.name}</h3>
            <span className={styles.speciality}>
              {e.speciality.toUpperCase()}
            </span>
            <p className={styles.desc}>{e.desc}</p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};
