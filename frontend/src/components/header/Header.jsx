import React from 'react';
import styles from './Header.module.scss';
import { Container } from '@mui/material';

export const Header = () => {
  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <a className={styles.logo} href="/">
            <div>LOGO</div>
          </a>
          <div className={styles.menuButton}>
            <button>О компании</button>
            <button>Услуги</button>
            <button>Отправить заявку</button>
            <button>Статус заявки</button>
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
