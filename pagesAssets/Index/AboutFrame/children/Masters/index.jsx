import React, { useState } from 'react';
import cn from 'classnames';
import { useSwipeable } from "react-swipeable";

//content
import masters from '../../../../../content/masters';

// styles
import styles from './style.module.css';


const Masters = () => {
  const [activeCard, setCard] = useState(0);
  const [cardOut, setCardOut] = useState(false);
  const [cardIn, setCardIn] = useState(false);
  const handlers = useSwipeable({
    onSwipedLeft: () => [
      setCardOut(true),
      setTimeout(() => {
        activeCard === 7 ?   setCard(0) : setCard(activeCard + 1);
        setCardIn(true);
        setCardOut(false);
      }, 300),
      setTimeout(() =>  setCardIn(false), 500),
    ],
    onSwipedRight:() => [
      setCardIn(true),
      setTimeout(() => {
        activeCard === 0 ? setCard(7) : setCard(activeCard - 1);
        setCardOut(true);
        setCardIn(false);
      },300),
      setTimeout(() =>  setCardOut(false), 500),
    ],
    trackTouch: true,
  });

  const {
    title, description, content, image,
  } = masters[activeCard];

  return (
    <>
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
      <div className={styles.pagination}>
        {Object.keys(masters).map((item, id) => (
          <div
            className={cn(styles.paginationButton, {
              [styles.active]: id === activeCard,
            })}
            onClick={() => setCard(id)}
          />
        ))}
      </div>
    </>
  );
};

export default Masters;
