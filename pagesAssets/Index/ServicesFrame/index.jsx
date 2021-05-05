import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';

// components
import Navigation from '../../../components/Navigation/index';
import Card from '../../../components/Card/index';

// styles
import styles from './style.module.css';
import sharedStyles from '../../../sharedStyles/style.module.css';
import Accordion from '../../../components/Accordion';

// content
import content from '../../../content/serviceContent';

const navigationList = [
  {
    name: 'Мужской стиль от ALL IN',
    id: 'style',
  },
  {
    name: 'Комплекс услуг',
    id: 'services',
  },
  {
    name: 'Королевский подход',
    id: 'king',
  },
  {
    name: 'Уход за руками и ногами',
    id: 'arms',
  },
];

const accordionLabelMap = {
  style: 'Мужской стиль от ALL IN',
  services: 'Комплекс услуг',
  king: 'Королевский подход',
  nails: 'Уход за руками и ногами',
};

const ServicesFrame = () => {
  const [activeTab, setTab] = useState('style');
  const [activeCard, setActiveCard] = useState(1);
  const { logoPosition } = useSelector((s) => ({
    logoPosition: s.app.logoPosition,
  }));

  useEffect(() => {
    setActiveCard(1);
  }, [activeTab]);

  return (
    <>
      <div className={styles.hideForMobile}>
        <div className={sharedStyles.frameWrapper}>
          <div className={sharedStyles.navigationBlock}>
            <Navigation
              list={navigationList}
              active={activeTab}
              onClick={(e) => setTab(e)}
              tabWidth={logoPosition}
            />
          </div>
          <div className={cn(sharedStyles.content, {
            [sharedStyles.directionColumn]: activeTab === 'king',
          })}
          >
            {content.contentMap[activeTab].map((tabContent) => (
              <div className={cn(styles.column, {
                [styles.flex]: activeTab === 'king',
              })}
              >
                {tabContent.map((item) => (
                  <Card
                    id={item.id}
                    active={item.id === activeCard}
                    title={item.title}
                    extraTitle={item.extraTitle}
                    content={item.content}
                    time={item.time}
                    price={item.price}
                    withRightGap={item.withRightGap}
                    withTopGap={item.withTopGap}
                    onClick={(e) => setActiveCard(e)}
                    titlePos={item.titlePos}
                    titleWeight={item.titleWeight}
                    titleSize={item.titleSize}
                    titleMaxWidth={item.titleMaxWidth}
                    titleAlign={item.titleAlign}
                    titleInvert={item.titleInvert}
                    withFullWidth={item.withFullWidth}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.hideForDesktop}>
        <div className={sharedStyles.frameWrapper}>
          <div className={sharedStyles.sloganBlock}>
            <div className={sharedStyles.slogan}>
              краткое изречение, обычно выражающее
            </div>
          </div>
          <div className={sharedStyles.accordionsBlock}>
            {Object.entries(content.contentArr).map(([key, value]) => (
              <Accordion
                objKey={key}
                isContentVisible={key === activeTab}
                className={sharedStyles.accordion}
                label={accordionLabelMap[key]}
                onClick={(currentBlock) => setTab(currentBlock)}
                content={value}
                openedCardId={1}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesFrame;
