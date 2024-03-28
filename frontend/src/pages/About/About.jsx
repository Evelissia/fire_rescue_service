// About.jsx

import React from 'react';
import styles from './About.module.scss';
import Titles from '../../components/Titles.jsx';

const About = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_description}>
        <Titles title="О нас" />
        {/* Ваше описание здесь */}
        <p>Мы - ваша надежная пожарно-спасательная служба, готовая помочь в любое время суток.</p>
      </div>
    </div>
  );
};

export default About;
