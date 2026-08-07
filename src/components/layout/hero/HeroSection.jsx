import { motion } from 'framer-motion';
import { ButtonCta, TopSection } from '../../ui';
import { HeroLayout } from '../hero_layout/HeroLayout';
import styles from './HeroSection.module.scss';
export const HeroSection = ({ data }) => {
  const { title, text, topSection, ctas } = data;
  return (
    <HeroLayout bgVariant={'bgImage'}>
      <div className={styles.container}>
        <TopSection text={topSection} />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className={styles.title}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className={styles.text}
        >
          {text}
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
        >
          {ctas?.map((link, index) => (
            <ButtonCta
              key={index}
              text={link.text}
              variant={link.variant}
              icon={link.icon}
              href={link.href}
            />
          ))}
        </motion.div>
      </div>
    </HeroLayout>
  );
};
