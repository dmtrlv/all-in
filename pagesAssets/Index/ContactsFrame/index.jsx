import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// components
import Navigation from '../../../components/Navigation';

// custom Hooks
import useScreen from '../../../customHooks/useScreen';

// styles
import sharedStyles from '../../../sharedStyles/style.module.css';
import cn from "classnames";
import {setPartVisibility} from "../../../action/app";
import YandexWidget from "./children/YandexWidget";
import Contacts from "./children/Contacts";

const navigationList = [
  {
    name: 'Как с нами связаться',
    id: 'contacts',
  },
  {name: 'Где найти', id: 'map'}
];

const contentMap = {
  contacts: <Contacts/>,
  map: <YandexWidget/>
}

const ContactsFrame = () => {
  const dispatch = useDispatch();
  const [activeTab, setTab] = useState('contacts');

  const { logoPosition, showParts } = useSelector((s) => ({
    logoPosition: s.app.logoPosition,
    showParts: s.app.showParts,
  }));
  const screen = useScreen();
  const isMobile = screen.width <= 690;

  useEffect(() => {
    setTimeout(() => dispatch(setPartVisibility(true), 50));
  }, [])
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
            {contentMap[activeTab]}
          </div>
        </>
      ) : (
          <div className={sharedStyles.accordionsBlock}>
            {Object.entries(contentMap).map(([key, value]) => (
                <div className={sharedStyles.accordionWrapper}>
                  <div
                      className={cn(sharedStyles.label, {
                        [sharedStyles.active]: key === activeTab,
                      })}
                      onClick={() => setTab(key)}
                  >
                    {navigationList.find((item) => item.id === key).name}
                  </div>
                  {key === activeTab && (
                      <div className={sharedStyles.accordionContent}>
                        {value}
                      </div>
                  )}
                </div>
            ))}
          </div>
      )}
    </div>
  );
};

export default ContactsFrame;
