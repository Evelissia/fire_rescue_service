import React from 'react';
import Titles from '../../components/Titles.jsx';
import styles from '../../components/header/Header.module.scss';
import Cards from '../../components/Cards/Cards.jsx';
import jsonData from './data.json';

// в главной странице мне нужно создать
// 1. компоненит заголовка (сделано)
// 2. Этот компоненит будет переиспользован, его я создам в папке components (сделано)

// 3. Создать компонени маленького заголовк, аналогично сделать, как и с большим (сделано)

// 4. Создать карточки, которые идут после надписи ...
// "Оказываем профессиональные услуги по созданию отчетов о пожарах и ресурсов для пожарников."
// Это тоже будет отдельный компонент с карточками. Нужно сделать их как в реакт-пицце, чтоб он был универсальный
// и в него можно было добавлять много карточек, просто беря их с json

// 5. Отзывы клиентов аналогично предыдущим карточкам, но там будет со слайдером

// 6. Компонент формы

// 7. Карта
// 8. Футер подключить компонент

const MainPage = () => {
  return (
    <div>
      <div>
        <Titles
          title="Пожарно-спасательная служба. Ваши надежные помощники в борьбе с пожарами"
          subtitle="Наши работники примут и передадут исполнителям все заявки от жителей"
        />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={styles.buttons} style={{ marginLeft: '56px' }}>
            <button variant="outlined" className={`${styles.btn2} ${styles.button}`}>
              Отправить заявку
            </button>
            <button
              style={{ marginLeft: '56px' }}
              variant="contained"
              className={`${styles.btn1} ${styles.button}`}>
              О нас
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 33 }}>
          <img
            src="/img/main1.png"
            alt="Пожарно-спасательная служба"
            width="1145"
            height="720"
            style={{ margin: '0 auto', display: 'block' }}
          />
        </div>
        <Titles
          title="Профессиональные услуги Пожарно-диспетчерской службы"
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
