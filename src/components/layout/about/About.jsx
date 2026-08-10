import { TopSection } from '../../ui';
import { SectionLayout } from '../section_layout/SectionLayout';
import styles from './About.module.scss';

export const About = ({ data }) => {
  return (
    <SectionLayout id={'about'} bgVariant={'soft'}>
      <div className={styles.media}>
        <img src={data.img} alt={data.title} className={styles.img} />
      </div>
      <div className={styles.content}>
        <TopSection text={data.top_section} />
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.text}>{data.text}</p>

        <div className={styles.expContainer}>
          {data?.exp?.map((e, index) => (
            <div key={index}>
              <p className={styles.number}>{e.number}</p>{' '}
              <span className={styles.desc}>{e.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
