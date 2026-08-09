import { TopSection } from '../../ui';
import { SectionLayout } from '../';
import styles from './CoverageSection.module.scss';

export const CoverageSection = ({ data }) => {
  return (
    <SectionLayout direction={'column'}>
      <div className={styles.header}>
        <TopSection text={data.top_section} />
        <h2>{data.title}</h2>
        <p>{data.text}</p>
      </div>
      <div className={styles.items}>
        {data?.items?.map((item, index) => (
          <div key={index} className={styles.coverage}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};
