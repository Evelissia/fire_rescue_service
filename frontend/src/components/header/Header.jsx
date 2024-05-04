import React from 'react';
import styles from './Header.module.scss';
import { Container, Button } from '@mui/material';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { selectIsAuth, logout } from '../../redux/slices/auth';
import { useDispatch, useSelector } from 'react-redux';

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
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const onClickLogout = () => {
    if (window.confirm('Вы действительно хотите выйти?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };
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
            <CustomButton to="/submit" label="Контакты" />
          </div>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link to="/">
                  <button variant="contained" className={`${styles.btn2} ${styles.button}`}>
                    Создать отчет
                  </button>
                </Link>
                <Link to="/">
                  <button
                    onClick={onClickLogout}
                    variant="outlined"
                    className={`${styles.btn1} ${styles.button}`}>
                    Выйти
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button variant="outlined" className={`${styles.btn1} ${styles.button}`}>
                    Войти
                  </button>
                </Link>

                <Link to="/register">
                  <button variant="contained" className={`${styles.btn2} ${styles.button}`}>
                    Создать аккаунт
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
