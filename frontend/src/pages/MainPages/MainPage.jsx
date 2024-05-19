import React from 'react';
import Titles from '../../components/Titles.jsx';
import styles from '../../components/header/Header.module.scss';
import Cards from '../../components/Cards/Cards.jsx';
import jsonData from './data.json';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <div>
        <Titles
          title="Диспетчеры аварийно-спасательной службы - ваши надежные помощники"
          subtitle="Наши работники примут и передадут исполнителям все заявки от жителей"
        />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={styles.buttons} style={{ marginLeft: '56px', marginTop: '20px' }}>
            <Link to="submit">
              <button
                style={{ height: '58px', cursor: 'pointer' }}
                variant="outlined"
                className={`${styles.btn2} ${styles.button}`}>
                Контакты
              </button>
            </Link>

            <Link to="/about">
              <button
                style={{ height: '58px', cursor: 'pointer' }}
                variant="outlined"
                className={`${styles.btn1} ${styles.button}`}>
                О нас
              </button>
            </Link>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 33 }}>
          <img
            src="/img/mainn.jpg"
            alt="Пожарно-спасательная служба"
            width="1145"
            height="720"
            style={{ margin: '0 auto', display: 'block', borderRadius: '20px' }}
          />
        </div>
        <Titles
          title="Профессиональные услуги Аварийно-спасательной службы"
          subtitle="Оказываем профессиональные услуги по созданию отчетов о пожарах и ресурсов для пожарников."
        />
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {jsonData.map((item, index) => (
            <Cards
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
