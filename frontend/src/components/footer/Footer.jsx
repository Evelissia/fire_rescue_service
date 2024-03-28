import React from 'react';
import styles from './Footer.module.scss';
import { Container, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.socialIcons}>
        <a href="">
          <i className="fa-brands fa-vk"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-telegram"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
      <div className={styles.footerBottom}>
        <p>
          Copyrighn &copy;2024; Designed by <span className={styles.designer}>Viktoria</span>
        </p>
      </div>
    </footer>
  );
};
