import React from 'react';
import styles from './About.module.scss';
import Titles from '../../components/Titles.jsx';

const About = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_description}>
        <Titles
          title="О нас"
          subtitle="Мы - ваша надежная пожарно-спасательная служба, готовая помочь в любое время суток"
        />
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.title_description}>
              <div className={styles.container}>
                <div className={styles.description_row}>
                  <div className={styles.description_body}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                    in a piece of classical Latin literature from 45 BC, making it over 2000 years
                    old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words, consectetur, from a
                    Lorem Ipsum passage, and going through the cites of the word in classical
                    literature, discovered the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
                    Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
                    ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                  </div>
                  <div className={styles.description_image}>
                    <img
                      src="/img/mainn.jpg"
                      alt="Пожарно-спасательная служба"
                      width="500"
                      height="300"
                      style={{ borderRadius: '15px', marginLeft: '20px' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
