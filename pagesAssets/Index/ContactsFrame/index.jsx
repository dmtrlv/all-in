import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

// components
import Navigation from '../../../components/Navigation';
import Card from '../../../components/Card';

// custom Hooks
import useScreen from '../../../customHooks/useScreen';

// styles
import sharedStyles from '../../../sharedStyles/style.module.css';
import styles from './style.module.css';
import Accordion from '../../../components/Accordion';
import cn from "classnames";

const navigationList = [
  {
    name: 'Как с нами связаться',
    id: 'contacts',
  },
];

const content = [
  {
    id: 1,
    title: 'Мобильный телефон',
    content: <a href="tel:+79112871777">8 911 287 17 77</a>,
    withTopGap: true,
    titleWeight: 'bold',
    titleSize: 'large',
    titlePos: 'leftTop',
  },
  {
    id: 2,
    title: 'Почта',
    withTopGap: true,
    titleSize: 'large',
    content: <a href="mailto:barber.allin@gmail.com">barber.allin@gmail.com</a>,
  },
];

const ContactsFrame = () => {
  const [activeTab, setTab] = useState('contacts');
  const [activeCard, setActiveCard] = useState(1);
  const [showParts, setShowParts] = useState(false);
  const { logoPosition, mainTab } = useSelector((s) => ({
    mainTab: s.app.mainTab,
    logoPosition: s.app.logoPosition,
  }));
  const screen = useScreen();
  const isMobile = screen.width <= 690;

  useEffect(() => {
    setShowParts(false);
    setTimeout(() => setShowParts(true), 10);
  }, [mainTab])
  return (
    <div className={sharedStyles.frameWrapper}>
      {!isMobile ? (
        <>
          <div className={cn(sharedStyles.navigationBlock, {
            [sharedStyles.showNav]: showParts,
          })}>
            <Navigation
              list={navigationList}
              active={activeTab}
              onClick={(e) => setTab(e)}
              tabWidth={logoPosition}
            />
          </div>
          <div className={cn(sharedStyles.content, {
            [sharedStyles.showContent]: showParts,
          })}
          >
            {content.map((item) => (
              <Card
                onClick={(e) => setActiveCard(e)}
                active={item.id === activeCard}
                id={item.id}
                title={item.title}
                content={item.content}
                className={styles.card}
                titleWeight={item.titleWeight}
                titleSize={item.titleSize}
                titlePos={item.titlePos}
                isSmall
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className={sharedStyles.sloganBlock}>
            <div className={sharedStyles.slogan}>
              выражающее руководящую идею поведения
            </div>
          </div>
          <div className={sharedStyles.accordionsBlock}>
            <Accordion isContentVisible openedCardId={1} content={content} label="КАК СВЯЗАТЬСЯ С НАМИ" />
          </div>
        </>
      )}
    </div>
  );
};

export default ContactsFrame;
