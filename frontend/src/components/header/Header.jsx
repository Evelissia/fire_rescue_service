import React from 'react';
import styles from './Header.module.scss';
import { Container, Button } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

function CustomButton({ to, label }) {
  const location = useLocation();

  // Функция для проверки, является ли текущий путь активным для кнопки
  const isActive = location.pathname === to;

  // Стили для активного и неактивного состояния
  const buttonStyles = {
    color: isActive ? 'red' : 'black',
    marginLeft: '43px',
  };

  return (
    <Button style={buttonStyles} component={NavLink} to={to} color="inherit">
      {label}
    </Button>
  );
}

export const Header = () => {
  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <a className={styles.logo} href="/">
            <div>LOGO</div>
          </a>
          <div className={styles.menuButton}>
            <CustomButton to="/about" label="О компании" />
            <CustomButton to="/services" label="Услуги" />
            <CustomButton to="/submit" label="Отправить заявку" />
            <CustomButton to="/status" label="Статус заявки" />
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
