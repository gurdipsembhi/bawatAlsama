// pages/about.js

import aboutUsData from '@/json/aboutUs';
import styles from './aboutUs.module.css'
const AboutPage = () => {
  return (
    <div className={styles.aboutpage}>
      <div className={styles.container}>
        <h1 className={styles.title}>{aboutUsData.about_us.title}</h1>
        <div className={styles.sections}>
          {aboutUsData.about_us.sections.map((section, index) => (
            <div key={index} className={styles.card}>
              <h2 className={styles.heading}>{section.heading}</h2>
              <p className={styles.content}>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
