import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brandInfo}>
            <h2 className={styles.brand}>RATH</h2>
            <p className={styles.slogan}>Engineering the Next Reality.</p>
          </div>
          
          <div className={styles.links}>
            <div className={styles.column}>
              <h4>Tecnología</h4>
              <a href="#">RATH Halo</a>
              <a href="#">RATH Augma</a>
              <a href="#">Investigación AI</a>
            </div>
            <div className={styles.column}>
              <h4>Empresa</h4>
              <a href="#">Filosofía</a>
              <a href="#">Misión & Visión</a>
              <a href="#">Carreras</a>
            </div>
            <div className={styles.column}>
              <h4>Social</h4>
              <div className={styles.socialIcons}>
                <a href="#"><FaGithub /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedin /></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} RATH Corporation. Todos los derechos reservados.</p>
          <div className={styles.legal}>
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
