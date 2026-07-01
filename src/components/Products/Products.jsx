import React from 'react';
import { motion } from 'framer-motion';
import styles from './Products.module.css';

const Products = () => {
  return (
    <section className={styles.productsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.label}>Nuestra Tecnología</h2>
          <h3 className={styles.title}>Redefiniendo la <span className="title-gradient">Realidad</span></h3>
        </div>

        <div className={styles.productsGrid}>
          {/* RATH Halo (VR) */}
          <motion.div 
            className={styles.productCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className={styles.imageContainer}>
              <img src="/rath_halo_vr.png" alt="RATH Halo VR" className={styles.productImage} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.productInfo}>
              <div className={styles.badge}>VR System</div>
              <h4>RATH Halo</h4>
              <p>
                Inmersión Total. Interfaz neuronal avanzada que permite una conexión sin precedentes con entornos virtuales, eliminando la latencia entre pensamiento y acción.
              </p>
              <button className={styles.exploreBtn}>Explorar Halo</button>
            </div>
          </motion.div>

          {/* RATH Augma (AR) */}
          <motion.div 
            className={styles.productCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className={styles.imageContainer}>
              <img src="/rath_augma_ar.png" alt="RATH Augma AR" className={styles.productImage} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.productInfo}>
              <div className={`${styles.badge} ${styles.badgeAr}`}>AR Wearable</div>
              <h4>RATH Augma</h4>
              <p>
                Aumento de la Realidad Diaria. Un dispositivo minimalista que superpone información vital en tu campo de visión, integrándose perfectamente a tu entorno físico.
              </p>
              <button className={styles.exploreBtn}>Explorar Augma</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
