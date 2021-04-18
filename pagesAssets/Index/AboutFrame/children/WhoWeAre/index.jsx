import React from 'react';

import styles from './style.module.css';

const WhoWeAre = () => (
  <div className={styles.card}>
    <h2 className={styles.cardTitle}>
      Барбешоп
      ALL IN*
    </h2>
    <div className={styles.textBlock}>
      <p className={styles.text}>*Это не просто барбершоп.</p>

      <p className={styles.text}>
        Это место, в котором мы собрали профессионалов с многолетним опытом работы и им доверяем.
      </p>
      <p className={styles.text}>
        Мы создали пространство где можно не думать о результате,
        потому что он всегда будет предвосхищать, ведь за вашу голову мы отвечаем своей.
      </p>
    </div>
  </div>
);

export default WhoWeAre;
