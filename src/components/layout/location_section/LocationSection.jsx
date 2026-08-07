import { ButtonCta, ItemLocation, MapComponent, TopSection } from '../../ui';
import { SectionLayout } from '../';
import styles from './LocationSection.module.scss';
export const LocationSection = ({ data }) => {
  return (
    <SectionLayout id='location'>
      <div className={styles.container}>
        <div className={styles.header}>
          <TopSection text={data.top_section} />
          <h2>{data.title}</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.data}>
            {data?.items?.map((d, index) => (
              <ItemLocation
                key={index}
                desc={d.desc}
                name={d.name}
                icon={d.icon}
              />
            ))}
            <div className={styles.cta}>
              <ButtonCta variant='secondary' text={'CÓMO LLEGAR -'} />
            </div>
          </div>
          <div className={styles.mapContainer}>
            <MapComponent coordenates={data.coordenates} />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
