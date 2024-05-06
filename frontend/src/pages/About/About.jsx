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
                    Бюджетное учреждение Омской области "Пожарно-спасательная служба Омской области"
                    создано в соответствии с распоряжением Правительства Омской области от 4 февраля
                    2009 № 10-рп "О создании бюджетного учреждения Омской области "Управление
                    противопожарной службы Омской области". Основные задачи: 1) осуществление
                    профилактики пожаров, их тушение на территории Омской области в соответствии с
                    законодательством; 2) спасение людей и имущества при пожарах; 3) организация и
                    проведение аварийно-спасательных работ в чрезвычайных ситуациях природного и
                    техногенного характера.
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
