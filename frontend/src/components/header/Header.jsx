import React from 'react';
import styles from './Header.module.scss';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <a className={styles.logo} href="/">
            <div>LOGO</div>
          </a>
          <div className={styles.menuButton}>
            {/* Используем Link для кнопок */}
            <Link to="/about">
              <button>О компании</button>
            </Link>
            <Link to="/services">
              <button>Услуги</button>
            </Link>
            <Link to="/submit">
              <button>Отправить заявку</button>
            </Link>
            <Link to="/status">
              <button>Статус заявки</button>
            </Link>
          </div>
          <div className={styles.buttons}>
            <button variant="outlined" className={`${styles.btn1} ${styles.button}`}>
              Войти
            </button>
            <button variant="contained" className={`${styles.btn2} ${styles.button}`}>
              Создать аккаунт
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
