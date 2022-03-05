import React from 'react';

import styles from './style.module.css';

const YandexWidget = () => (
  <div className={styles.widgetCard}>
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A6dafb714b97d34fb6936e5e4fdaebf2f54a664160e82b2a0b5a9a4a66dddcb3e&amp;source=constructor"
      frameBorder="0"
      title="yandex-map-widget"
      className={styles.widget}
    />
  </div>
);

export default YandexWidget;
