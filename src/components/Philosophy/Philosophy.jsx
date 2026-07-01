import React from 'react';
import { motion } from 'framer-motion';
import styles from './Philosophy.module.css';

const Philosophy = () => {
  return (
    <section className={styles.philosophySection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.label}>Filosofía RATH</h2>
          <h3 className={styles.title}>La tecnología debe ampliar el <br/><span className="title-gradient">potencial humano.</span></h3>
        </motion.div>

        <div className={styles.grid}>
          <motion.div 
            className={`${styles.card} glass-panel`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4>Innovación con Propósito</h4>
            <p>
              En RATH creemos que la innovación no consiste en crear tecnología por el simple hecho de hacerlo. Consiste en desarrollar herramientas que eliminen barreras, impulsen el progreso y permitan a las personas y organizaciones alcanzar más de lo que creían posible.
            </p>
          </motion.div>
          
          <motion.div 
            className={`${styles.card} glass-panel`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4>Visión a Largo Plazo</h4>
            <p>
              Investigamos, diseñamos y construimos con una visión de largo plazo, guiados por la curiosidad, la excelencia y el propósito de sentar las bases para la próxima evolución de la interfaz humana.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
