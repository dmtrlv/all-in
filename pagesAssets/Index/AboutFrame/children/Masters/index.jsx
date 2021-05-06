import React, { useState } from 'react';
import cn from 'classnames';
import { useSwipeable } from "react-swipeable";

//content
import masters from '../../../../../content/masters';

// styles
import styles from './style.module.css';

// assets
// import ArrowSvg from '../../../../../public/masters/arrow.svg';


const Masters = () => {
  const [activeCard, setCard] = useState(0);
  const [cardOut, setCardOut] = useState(false);
  const [cardIn, setCardIn] = useState(false);

  const prevCard = () => {
    setCardIn(true);
    setTimeout(() => {
      activeCard === 0 ? setCard(7) : setCard(activeCard - 1);
      setCardOut(true);
      setCardIn(false);
    },300);
    setTimeout(() =>  setCardOut(false), 500);
  }

  const nextCard = () => {
    setCardOut(true);
    setTimeout(() => {
      activeCard === 7 ?   setCard(0) : setCard(activeCard + 1);
      setCardIn(true);
      setCardOut(false);
    }, 300);
    setTimeout(() =>  setCardIn(false), 500);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => nextCard(),
    onSwipedRight:() => prevCard(),
    trackTouch: true,
  });

  const {
    title, description, content, image,
  } = masters[activeCard];

  return (
    <>
      <div className={styles.cardsContainer}>
        <div {...handlers} className={cn(styles.card, {
          [styles.reverse]: activeCard === 0,
          [styles.out]: cardOut,
          [styles.in]: cardIn,
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
      </div>
      <div className={styles.pagination}>
        <button className={cn(styles.arrowBtn, styles.left)} onClick={() => prevCard()}>
          <img src='/masters/arrow.svg' alt='arrow-left'/>
        </button>
        <button className={cn(styles.arrowBtn, styles.right)} onClick={() => nextCard()}>
          <img src='/masters/arrow.svg' alt='arrow-right'/>
        </button>
      </div>
    </>
  );
};

export default Masters;
