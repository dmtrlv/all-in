import React, { useState } from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import Navigation from '../../../components/Navigation';

import Widget from './children/YandexWidget';
import WhoWeAre from './children/WhoWeAre';
import Masters from './children/Masters';

// customHooks
import useScreen from '../../../customHooks/useScreen';

// styles
import sharedStyles from '../../../sharedStyles/style.module.css';
import styles from './style.module.css';

const navigationList = [
  {
    name: 'Кто мы',
    id: 'who',
  },
  {
    name: 'Где найти',
    id: 'find',
  },
  {
    name: 'Мастера',
    id: 'masters',
  },
];

const contentMap = {
  who: <WhoWeAre />,
  find: <Widget />,
  masters: <Masters />,
};

const AboutFrame = () => {
  const [activeTab, setTab] = useState('who');
  const { logoPosition } = useSelector((s) => ({
    logoPosition: s.app.logoPosition,
  }));

  const screen = useScreen();
  const isMobile = screen.width <= 690;

  return (
    <div className={sharedStyles.frameWrapper}>
      {!isMobile ? (
        <>
          <div className={sharedStyles.navigationBlock}>
            <Navigation
              list={navigationList}
              active={activeTab}
              onClick={(e) => setTab(e)}
              tabWidth={logoPosition}
            />
          </div>
          <div className={sharedStyles.content}>
            {contentMap[activeTab]}
          </div>
        </>
      ) : (
        <>
          <div className={sharedStyles.sloganBlock}>
            <div className={sharedStyles.slogan}>
              <span className={sharedStyles.accent}>* ALL IN</span>
            </div>
          </div>
          <div className={sharedStyles.accordionsBlock}>
            {Object.entries(contentMap).map(([key, value]) => (
              <div className={styles.accordionWrapper}>
                <div
                  className={cn(styles.label, {
                    [styles.active]: key === activeTab,
                  })}
                  onClick={() => setTab(key)}
                >
                  {navigationList.find((item) => item.id === key).name}
                </div>
                {key === activeTab && (
                <div className={styles.accordionContent}>
                  {value}
                </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AboutFrame;
