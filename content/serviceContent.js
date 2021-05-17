/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from '../pagesAssets/Index/ServicesFrame/style.module.css';

const content = {
  contentMap: {
    style: [
      [
        {
          id: 1,
          title: 'Мужская   стрижка',
          extraTitle: '',
          time: '60',
          price: '2000.00',
          withTopGap: false,
        },
        {
          id: 2,
          title: 'Коррекция бороды',
          extraTitle: 'и усов',
          time: '30',
          price: '1000.00',
          withTopGap: true,
        },
      ],
      [
        {
          id: 3,
          title: 'Детская стрижка от 7 лет',
          extraTitle: '',
          time: '60',
          price: '1500.00',
          withTopGap: false,
        },
        {
          id: 4,
          title: 'Моделирование бороды',
          extraTitle: '',
          time: '30',
          price: '1500.00',
          withTopGap: true,
        },
      ],
      [
        {
          id: 5,
          title: 'Стрижка под машинку',
          extraTitle: '',
          time: '30',
          price: '1000.00',
          withTopGap: false,
        },
        {
          id: 6,
          title: 'Бритье головы',
          extraTitle: '',
          time: '60',
          price: '2000.00',
          withTopGap: true,
        },
      ],
    ],

    services: [
      [
        {
          id: 1,
          title:
            (
              <span>
                Стрижка
                <br />
                +
                <br />
                коррекция бороды и усов
              </span>
            ),
          extraTitle: '',
          time: '90',
          price: '2600.00',
          withTopGap: false,
        },
      ],
      [
        {
          id: 2,
          title: 'Стрижка + моделирование бороды',
          extraTitle: '',
          time: '75',
          price: '3000.00',
          withTopGap: false,
        },
      ],
      [
        {
          id: 3,
          title: 'Стрижка машинкой + коррекция бороды',
          extraTitle: '',
          time: '60',
          price: '1600.00',
          withTopGap: false,
        },
      ],
    ],
    king: [
      [
        {
          id: 1,
          title: '*Королевский подход',
          content: (
            <span className={styles.contentText}>
              *Королевское бритье - это не просто бритье в его обычном понимании.
              Это СПА процедура на 60 минут с использованием косметики Truefitt & Hill.
              <br />
              <br />
              Инструменты Вашего церюльника будут исключительно из золота и стали,
              которая используется для производства спутников и космических кораблей (возможно).
              <br />
              <br />
              Вам нальют дорогой виски, предложат сигару прямиком с жаркой Кубы.
            </span>
          ),
          extraTitle: '',
          withFullWidth: true,
          withTopGap: false,
        },
      ],
      [
        {
          id: 2,
          title: 'Королевское бритье',
          extraTitle: '',
          withFullWidth: false,
          time: '60',
          price: '2000.00',
          withTopGap: false,
          withRightGap: true,
        },

        {
          id: 3,
          title: 'Стрижка + Королевское бритье',
          extraTitle: '',
          time: '60',
          price: '1600.00',
          withTopGap: false,
        },
      ],
    ],
  },

  contentArr: {
    style: [
      {
        id: 1,
        title: 'Мужская   стрижка',
        extraTitle: '',
        time: '60',
        price: '2000.00',
        withTopGap: true,
      },
      {
        id: 2,
        title: 'Коррекция бороды',
        extraTitle: 'и усов',
        time: '30',
        price: '1000.00',
        withTopGap: true,
      },

      {
        id: 3,
        title: ' Детская стрижка от 7 лет',
        extraTitle: '',
        time: '60',
        price: '1500.00',
        withTopGap: true,
      },
      {
        id: 4,
        title: 'Моделирование бороды',
        extraTitle: '',
        time: '30',
        price: '1500.00',
        withTopGap: true,
      },
      {
        id: 5,
        title: 'Стрижка под машинку',
        extraTitle: '',
        time: '30',
        price: '1000.00',
        withTopGap: true,
      },
      {
        id: 6,
        title: 'Бритье головы',
        extraTitle: '',
        time: '60',
        price: '2000.00',
        withTopGap: true,
      },
    ],

    services: [
      {
        id: 1,
        title: (
          <span>
            Стрижка
            <br />
            +
            <br />
            коррекция бороды и усов
          </span>),
        extraTitle: '',
        time: '90',
        price: '2600.00',
        withTopGap: true,
      },
      {
        id: 2,
        title: 'Стрижка + моделирование бороды',
        extraTitle: '',
        time: '75',
        price: '3000.00',
        withTopGap: true,
      },
      {
        id: 3,
        title: 'Стрижка машинкой + коррекция бороды',
        extraTitle: '',
        time: '60',
        price: '1600.00',
        withTopGap: true,
      },
    ],

    king: [
      {
        id: 1,
        title: '*Королевский подход',
        content: (
          <span className={styles.contentText}>
            *Королевское бритье - это не просто бритье в его обычном понимании.
            Это СПА процедура на 60 минут с использованием косметики Truefitt & Hill.
            <br />
            <br />
            Инструменты Вашего церюльника будут исключительно из золота и стали,
            которая используется для производства спутников и космических кораблей (возможно).
            <br />
            <br />
            Вам нальют дорогой виски, предложат сигару прямиком с жаркой Кубы.
          </span>
        ),
        extraTitle: '',
        withFullWidth: true,
        withTopGap: true,
      },
      {
        id: 2,
        title: 'Королевское бритье',
        extraTitle: '',
        withFullWidth: false,
        time: '60',
        price: '2000.00',
        withTopGap: true,
      },
      {
        id: 3,
        title: 'Стрижка + Королевское бритье',
        extraTitle: '',
        time: '60',
        price: '1600.00',
        withTopGap: true,
      },
    ],
    nails: null,
  },
};

export default content;
