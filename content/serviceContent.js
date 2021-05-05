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
          titlePos: 'leftTop',
          titleWeight: 'bold',
          titleSize: 'large',
          titleMaxWidth: 180,
          titleAlign: null,
          titleInvert: false,
        },
        {
          id: 2,
          title: 'Коррекция бороды',
          extraTitle: 'и усов',
          time: '30',
          price: '1000.00',
          withTopGap: true,
          titlePos: 'leftTop',
          titleWeight: 'bold',
          titleSize: 'large',
          titleMaxWidth: 180,
          titleAlign: null,
          titleInvert: false,
        },
      ],
      [
        {
          id: 3,
          title: ' Детская стрижка от 7 лет',
          extraTitle: '',
          time: '60',
          price: '1500.00',
          withTopGap: false,
          titlePos: 'center',
          titleWeight: 'bold',
          titleSize: 'small',
          titleMaxWidth: 66,
          titleAlign: 'alignCenter',
          titleInvert: false,
        },
        {
          id: 4,
          title: 'Моделирование бороды',
          extraTitle: '',
          time: '30',
          price: '1500.00',
          withTopGap: true,
          titlePos: 'bottomLeft',
          titleWeight: null,
          titleSize: 'large',
          titleMaxWidth: 158,
          titleAlign: null,
          titleInvert: false,
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
          titlePos: 'rightTop',
          titleWeight: 'bold',
          titleSize: 'medium',
          titleMaxWidth: 120,
          titleAlign: 'alignRight',
          titleInvert: false,
        },
        {
          id: 6,
          title: 'Бритье головы',
          extraTitle: '',
          time: '60',
          price: '2000.00',
          withTopGap: true,
          titlePos: 'bottom',
          titleWeight: 'bold',
          titleSize: 'large',
          titleMaxWidth: 152,
          titleAlign: null,
          titleInvert: true,
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
          titlePos: 'center',
          titleWeight: 'bold',
          titleSize: 'small',
          titleMaxWidth: 140,
          titleAlign: 'alignCenter',
          titleInvert: false,
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
          titlePos: 'leftTop',
          titleWeight: null,
          titleSize: 'large',
          titleMaxWidth: 108,
          titleAlign: null,
          titleInvert: false,
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
          titlePos: 'rightTop',
          titleWeight: 'bold',
          titleSize: 'normal',
          titleMaxWidth: 108,
          titleAlign: 'alignRight',
          titleInvert: false,
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
          titlePos: 'leftTop',
          titleWeight: 'bold',
          titleSize: 'extraLg',
          titleMaxWidth: 541,
          titleAlign: 'alignRight',
          titleInvert: false,
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
          titlePos: 'bottom',
          titleWeight: 'bold',
          titleSize: 'large',
          titleMaxWidth: 108,
          titleAlign: 'alignRight',
          titleInvert: false,
          withRightGap: true,
        },

        {
          id: 3,
          title: 'Стрижка + Королевское бритье',
          extraTitle: '',
          time: '60',
          price: '1600.00',
          withTopGap: false,
          titlePos: 'leftTop',
          titleWeight: 'bold',
          titleSize: 'large',
          titleMaxWidth: 108,
          titleAlign: 'alignRight',
          titleInvert: false,
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
        titlePos: 'leftTop',
        titleWeight: 'bold',
        titleSize: 'large',
        titleMaxWidth: 180,
        titleAlign: null,
        titleInvert: false,
      },
      {
        id: 2,
        title: 'Коррекция бороды',
        extraTitle: 'и усов',
        time: '30',
        price: '1000.00',
        withTopGap: true,
        titlePos: 'leftTop',
        titleWeight: 'bold',
        titleSize: 'large',
        titleMaxWidth: 180,
        titleAlign: null,
        titleInvert: false,
      },

      {
        id: 3,
        title: ' Детская стрижка от 7 лет',
        extraTitle: '',
        time: '60',
        price: '1500.00',
        withTopGap: true,
        titlePos: 'center',
        titleWeight: 'bold',
        titleSize: 'small',
        titleMaxWidth: 66,
        titleAlign: 'alignCenter',
        titleInvert: false,
      },
      {
        id: 4,
        title: 'Моделирование бороды',
        extraTitle: '',
        time: '30',
        price: '1500.00',
        withTopGap: true,
        titlePos: 'bottomLeft',
        titleWeight: null,
        titleSize: 'large',
        titleMaxWidth: 158,
        titleAlign: null,
        titleInvert: false,
      },
      {
        id: 5,
        title: 'Стрижка под машинку',
        extraTitle: '',
        time: '30',
        price: '1000.00',
        withTopGap: true,
        titlePos: 'rightTop',
        titleWeight: 'bold',
        titleSize: 'medium',
        titleMaxWidth: 120,
        titleAlign: 'alignRight',
        titleInvert: false,
      },
      {
        id: 6,
        title: 'Бритье головы',
        extraTitle: '',
        time: '60',
        price: '2000.00',
        withTopGap: true,
        titlePos: 'bottom',
        titleWeight: 'bold',
        titleSize: 'large',
        titleMaxWidth: 152,
        titleAlign: null,
        titleInvert: true,
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
        titlePos: 'center',
        titleWeight: 'bold',
        titleSize: 'small',
        titleMaxWidth: 140,
        titleAlign: 'alignCenter',
        titleInvert: false,
      },
      {
        id: 2,
        title: 'Стрижка + моделирование бороды',
        extraTitle: '',
        time: '75',
        price: '3000.00',
        withTopGap: true,
        titlePos: 'leftTop',
        titleWeight: null,
        titleSize: 'large',
        titleMaxWidth: 108,
        titleAlign: null,
        titleInvert: false,
      },
      {
        id: 3,
        title: 'Стрижка машинкой + коррекция бороды',
        extraTitle: '',
        time: '60',
        price: '1600.00',
        withTopGap: true,
        titlePos: 'rightTop',
        titleWeight: 'bold',
        titleSize: 'normal',
        titleMaxWidth: 108,
        titleAlign: 'alignRight',
        titleInvert: false,
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
        titlePos: 'leftTop',
        titleWeight: 'bold',
        titleSize: 'extraLg',
        titleMaxWidth: 541,
        titleAlign: 'alignRight',
        titleInvert: false,
      },
      {
        id: 2,
        title: 'Королевское бритье',
        extraTitle: '',
        withFullWidth: false,
        time: '60',
        price: '2000.00',
        withTopGap: true,
        titlePos: 'bottom',
        titleWeight: 'bold',
        titleSize: 'large',
        titleMaxWidth: 108,
        titleAlign: 'alignRight',
        titleInvert: false,
      },
      {
        id: 3,
        title: 'Стрижка + Королевское бритье',
        extraTitle: '',
        time: '60',
        price: '1600.00',
        withTopGap: true,
        titlePos: 'leftTop',
        titleWeight: 'bold',
        titleSize: 'large',
        titleMaxWidth: 108,
        titleAlign: 'alignRight',
        titleInvert: false,
      },
    ],
    nails: null,
  },
};

export default content;
