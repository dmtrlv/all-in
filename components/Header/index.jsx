import React, { useEffect, useRef, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

// actions
import {setFirstHeaderItemPosToLeft, setLogoPositionToLeft, setMainTab, setPartVisibility} from '../../action/app';

// customHooks
import useScreen from '../../customHooks/useScreen';

// components
import HeaderNavigationComp from '../HeaderNavigation';

// styles
import styles from './style.module.css';

const Header = () => {
  const logoEl = useRef();
  const dispatch = useDispatch();
  const screen = useScreen();
  const [isMobile, setIsMobile] = useState(false);
  const {mainTab} = useSelector(s => ({
    mainTab: s.app.mainTab,
  }))

  useEffect(() => {
    setIsMobile(screen.width <= 690);
    if (!isMobile) {
      const logoPosition = logoEl.current.getBoundingClientRect();
      dispatch(setLogoPositionToLeft(logoPosition.width + logoPosition.x));
      dispatch(setFirstHeaderItemPosToLeft(null));
    }
  }, [isMobile, screen]);

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContent}>
        {!isMobile
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        && <img onClick={mainTab !== 'order' ? () => [
          dispatch(setPartVisibility(false)), setTimeout(() => dispatch(setMainTab('order')), 300)
        ] : () => {}} ref={logoEl} src="/header/all-in-logo.svg" alt="logo" />}
        <HeaderNavigationComp className={styles.headerNavigation} />
      </div>
    </div>
  );
};

export default Header;
