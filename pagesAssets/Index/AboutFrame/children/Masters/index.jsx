import React, { useState, useRef } from 'react';
import cn from 'classnames';
import { useSwipeable } from "react-swipeable";

// styles
import styles from './style.module.css';

const cards = {
  0: {
    title: 'МАСТЕРА БАРБЕШОПА ALL IN',
    content: [
      'Как часто Вы встречали людей, которым сможете доверить свой секрет? Согласитесь, не часто. А тех, кому можете доверить свой внешний вид - еще реже.',
      'All In Barbershop это то самое место, где любому мастеру можно доверять. Хотите стильную стригу? Вам сюда. Хотите аккуратную бороду? Вам сюда. Каждый из них имеет опыт, соразмерный континентам. Не верите? Советуем придти и убедиться самим.',
      'Далее в этом разделе Вы сможете познакомиться с каждым мастером. Крутите барабан!',
    ],
    description: '',
    image: '/masters/all.png',
  },
  1: {
    title: 'Андрей Щагин',
    description: 'Основатель барбершопа All In, церюльник',
    content: [
      'Стрижёт со времен Алессандро Медичи - герцога Флорентийского от 1532 года. Наводил фешенебельность на головах гениев живописии Флоренции - Данте, Петрарка, Леонардо да Винчи, Микеланджело и др.',
      'Дела шли в гору, вся Флорентийская республика уже слышала про одарённого мастера, который способен сделать из неотёсанных дикарейсамых настоящих “classe superiore”.',
      'Но сдержать тоску по родной земле больше не было сил. Он вернулся в северную столицу и основал строгую церюльню, куда созвал других гениев стрижки со всех уголков Мира.',
    ],
    image: '/masters/andrey.png',
  },
  2: {
    title: 'Владимир Грознов',
    description: 'Церюльник барбершопа All In',
    content: [
      'Стрижёт со времен Алессандро Медичи - герцога Флорентийского от 1532 года. Наводил фешенебельность на головах гениев живописии Флоренции - Данте, Петрарка, Леонардо да Винчи, Микеланджело и др.',
      'Дела шли в гору, вся Флорентийская республика уже слышала про одарённого мастера, который способен сделать из неотёсанных дикарейсамых настоящих “classe superiore”.',
      'Но сдержать тоску по родной земле больше не было сил. Он вернулся в северную столицу и основал строгую церюльню, куда созвал других гениев стрижки со всех уголков Мира.',
    ],
    image: '/masters/vladimir.png',
  },
  3: {
    title: 'Карен Ненашев',
    description: 'Церюльник барбершопа All In',
    content: [
      'Стрижёт со времен Алессандро Медичи - герцога Флорентийского от 1532 года. Наводил фешенебельность на головах гениев живописии Флоренции - Данте, Петрарка, Леонардо да Винчи, Микеланджело и др.',
      'Дела шли в гору, вся Флорентийская республика уже слышала про одарённого мастера, который способен сделать из неотёсанных дикарейсамых настоящих “classe superiore”.',
      'Но сдержать тоску по родной земле больше не было сил. Он вернулся в северную столицу и основал строгую церюльню, куда созвал других гениев стрижки со всех уголков Мира.',
    ],
    image: '/masters/karen.png',
  },
  4: {
    title: 'Иван Буряков',
    description: 'Церюльник барбершопа All In',
    content: [
      'Стрижёт со времен Алессандро Медичи - герцога Флорентийского от 1532 года. Наводил фешенебельность на головах гениев живописии Флоренции - Данте, Петрарка, Леонардо да Винчи, Микеланджело и др.',
      'Дела шли в гору, вся Флорентийская республика уже слышала про одарённого мастера, который способен сделать из неотёсанных дикарейсамых настоящих “classe superiore”.',
      'Но сдержать тоску по родной земле больше не было сил. Он вернулся в северную столицу и основал строгую церюльню, куда созвал других гениев стрижки со всех уголков Мира.',
    ],
    image: '/masters/ivan.png',
  },
  5: {
    title: 'Александр Уразбаев',
    description: 'Церюльник барбершопа All In',
    content: [
      'Стрижёт со времен Алессандро Медичи - герцога Флорентийского от 1532 года. Наводил фешенебельность на головах гениев живописии Флоренции - Данте, Петрарка, Леонардо да Винчи, Микеланджело и др.',
      'Дела шли в гору, вся Флорентийская республика уже слышала про одарённого мастера, который способен сделать из неотёсанных дикарейсамых настоящих “classe superiore”.',
      'Но сдержать тоску по родной земле больше не было сил. Он вернулся в северную столицу и основал строгую церюльню, куда созвал других гениев стрижки со всех уголков Мира.',
    ],
    image: '/masters/alexander.png',
  },
  6: {
    title: 'Саша Бен',
    description: 'Церюльник барбершопа All In',
    content: [
      'Стрижёт со времен Алессандро Медичи - герцога Флорентийского от 1532 года. Наводил фешенебельность на головах гениев живописии Флоренции - Данте, Петрарка, Леонардо да Винчи, Микеланджело и др.',
      'Дела шли в гору, вся Флорентийская республика уже слышала про одарённого мастера, который способен сделать из неотёсанных дикарейсамых настоящих “classe superiore”.',
      'Но сдержать тоску по родной земле больше не было сил. Он вернулся в северную столицу и основал строгую церюльню, куда созвал других гениев стрижки со всех уголков Мира.',
    ],
    image: '/masters/sasha.png',
  },
  7: {
    title: 'Павел Шипило',
    description: 'Церюльник барбершопа All In',
    content: [
      'Стрижёт со времен Алессандро Медичи - герцога Флорентийского от 1532 года. Наводил фешенебельность на головах гениев живописии Флоренции - Данте, Петрарка, Леонардо да Винчи, Микеланджело и др.',
      'Дела шли в гору, вся Флорентийская республика уже слышала про одарённого мастера, который способен сделать из неотёсанных дикарейсамых настоящих “classe superiore”.',
      'Но сдержать тоску по родной земле больше не было сил. Он вернулся в северную столицу и основал строгую церюльню, куда созвал других гениев стрижки со всех уголков Мира.',
    ],
    image: '/masters/pavel.png',
  },
};

const Masters = () => {
  const [activeCard, setCard] = useState(0);
  const ref = useRef();
  const handlers = useSwipeable({
    onSwipedLeft: () => setCard(activeCard + 1),
    onSwipedRight: () => setCard(activeCard - 1),
    trackTouch: true,
    trackMouse: true,
  });

  const {
    title, description, content, image,
  } = cards[activeCard];

  return (
    <div className={styles.contentBlock}>
      <div {...handlers} ref={ref} className={cn(styles.card, {
        [styles.reverse]: activeCard === 0,
      })}
      >
        <div className={styles.content}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <div className={styles.textBlock}>
            {content.map((item) => <p className={styles.text}>{item}</p>)}
          </div>
        </div>
        <div className={styles.imgBox}>
          <img className={styles.image} alt={`${title}_photo`} src={image} />
        </div>
      </div>
      <div className={styles.pagination}>
        {Object.keys(cards).map((item, id) => (
          <div
            className={cn(styles.paginationButton, {
              [styles.active]: id === activeCard,
            })}
            onClick={() => setCard(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Masters;
