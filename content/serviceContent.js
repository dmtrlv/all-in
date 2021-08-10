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
          time: '75',
          price: '2600.00',
          withTopGap: false,
        },
      ],
      [
        {
          id: 2,
          title: 'Стрижка + моделирование бороды',
          extraTitle: '',
          time: '90',
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
              Королевское бритье с использование косметики TRUEFITT and HILL
              <br />
               Это не просто процесс по коррекции бороды или удалению щетины, а еще целая спа процедура с уходом для лица!
              <br />
              <ul>
                  Этапы королевского бритья:
                <li>
                  Мастер изучает лицо клиента. Он должен заранее увидеть, где находятся родинки, шрамы и т.д.
                </li>
                <li>Нанесение компресса с использованием масел для бритья. Они смягчают щетину и приподнимают   волосяной покров !</li>
                <li>Нанесение пены</li>
                <li>Опасное Бритье - самая ответственная часть процедуры. Мы используем полностью стерильные инструменты. Лезвия сменные.</li>
                <li>Контрастный  компресс. Процедура королевского бритья вызывает у клиентов только приятные ощущения. Однако даже при таком деликатном обращении кожа любого типа испытывает своеобразный стресс. Использование алюмокалиевых квасцов (природный антисептик )</li>
                <li>После мастер массирующими движениями наносит бальзам после бритья тем самым увлажняя кожу.</li>
                <li>Завершающим аккордом королевского бритья - одеколоны TRUEFITT and HILL</li>
                        </ul>
            </span>
          ),
          extraTitle: '',
          withRightGap: true,
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
          time: '90',
          price: '3600.00',
          withTopGap: true,
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
        time: '75',
        price: '2600.00',
        withTopGap: true,
      },
      {
        id: 2,
        title: 'Стрижка + моделирование бороды',
        extraTitle: '',
        time: '90',
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
              Королевское бритье с использование косметики TRUEFITT and HILL
              <br />
               Это не просто процесс по коррекции бороды или удалению щетины, а еще целая спа процедура с уходом для лица!
              <br />
              <ul>
                  Этапы королевского бритья:
                <li>
                  Мастер изучает лицо клиента. Он должен заранее увидеть, где находятся родинки, шрамы и т.д.
                </li>
                <li>Нанесение компресса с использованием масел для бритья. Они смягчают щетину и приподнимают   волосяной покров !</li>
                <li>Нанесение пены</li>
                <li>Опасное Бритье - самая ответственная часть процедуры. Мы используем полностью стерильные инструменты. Лезвия сменные.</li>
                <li>Контрастный  компресс. Процедура королевского бритья вызывает у клиентов только приятные ощущения. Однако даже при таком деликатном обращении кожа любого типа испытывает своеобразный стресс. Использование алюмокалиевых квасцов (природный антисептик )</li>
                <li>После мастер массирующими движениями наносит бальзам после бритья тем самым увлажняя кожу.</li>
                <li>Завершающим аккордом королевского бритья - одеколоны TRUEFITT and HILL</li>
                        </ul>
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
        time: '90',
        price: '3600.00',
        withTopGap: true,
      },
    ],
    nails: null,
  },
};

export default content;
