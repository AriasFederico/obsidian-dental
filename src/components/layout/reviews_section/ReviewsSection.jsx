import { TiStarFullOutline } from 'react-icons/ti';
import { ButtonCta, TopSection } from '../../ui';
import { SectionLayout } from '../';
import styles from './ReviewsSection.module.scss';

export const ReviewsSection = ({ data }) => {
  const Star = TiStarFullOutline;
  return (
    <SectionLayout id='reviews'>
      <div className={styles.container}>
        <div className={styles.header}>
          <TopSection text={data.top_section} />
          <h2>{data.title}</h2>
        </div>

        <div className={styles.reviewsContainer}>
          {data?.reviews?.map((r, index) => (
            <div key={index} className={styles.review}>
              <div className={styles.rating}>
                {[...Array(r.stars)].map((_, index) => (
                  <Star key={(_, index)} className={styles.star} size={14} />
                ))}
              </div>
              <h3 className={styles.quote}>"{r.quote}"</h3>
              <p className={styles.author}>{r.author}</p>
            </div>
          ))}
        </div>

        <ButtonCta
          href={data.cta}
          text={'VER TODAS EN GOOGLE MAPS -'}
          variant='secondary'
        />
      </div>
    </SectionLayout>
  );
};
