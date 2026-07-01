import React from 'react';
import { motion } from 'framer-motion';
import styles from './MissionVision.module.css';

const MissionVision = () => {
  return (
    <section className={styles.section}>
      <div className={styles.splitLayout}>
        <motion.div 
          className={styles.pane}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className={styles.content}>
            <div className={styles.iconWrapper}>
              <div className={styles.pulseMission}></div>
            </div>
            <h2 className={styles.title}>Misión</h2>
            <p className={styles.text}>
              Diseñar y desarrollar tecnologías innovadoras que resuelvan problemas reales, impulsen el progreso y amplíen el potencial humano a través de la investigación, la ingeniería y la innovación continua.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.pane}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className={styles.content}>
            <div className={styles.iconWrapper}>
              <div className={styles.pulseVision}></div>
            </div>
            <h2 className={styles.title}>Visión</h2>
            <p className={styles.text}>
              Convertirnos en una empresa líder mundial en investigación y desarrollo tecnológico, creando soluciones que definan el futuro de la inteligencia artificial, la automatización, la realidad extendida (XR) y las tecnologías emergentes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
