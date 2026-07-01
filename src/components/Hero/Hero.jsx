import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundGlow}></div>
      
      <div className={styles.content}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h2 className={styles.brand}>RATH</h2>
          <h1 className={styles.slogan}>
            Engineering the <br/>
            <span className="title-gradient">Next Reality.</span>
          </h1>
          <p className={styles.subtitle}>
            Investigación y desarrollo avanzado en Realidad Virtual y Realidad Aumentada.
          </p>
          
          <motion.button 
            className={styles.ctaButton}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 240, 255, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Descubrir el Futuro
          </motion.button>
        </motion.div>
      </div>

      <div className={styles.scrollIndicator}>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className={styles.mouse}
        >
          <div className={styles.wheel}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
