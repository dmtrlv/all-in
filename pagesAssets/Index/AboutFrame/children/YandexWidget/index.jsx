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
    <div className={styles.textBlock}>
      <p className={styles.text}>
        Благодаря этой карте Вы всегда найдете
        путь сквозь серость города. Линия пройдет через асфальт и бетон, через светофоры и подземки.
        Где бы Вы не были, всегда найдется наиболее удобный и быстрый маршрут.
      </p>
      <p className={styles.text}>
        И да, стоит разрешить карте определять Вашу геопозицию и на карте появится маршрут до самого
        порядочного барбершопа Северной столицы.
      </p>
      <p className={styles.text}>
        Помните, что все дороги ведут в All In Barbershop
      </p>
    </div>
    <div className={styles.hint}>
      Дорогу осилит идущий
    </div>
  </div>
);

export default YandexWidget;
