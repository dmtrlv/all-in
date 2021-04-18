import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

// actions
import { setFirstHeaderItemPosToLeft, setLogoPositionToLeft, setMainTab } from '../../action/app';

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

  useEffect(() => {
    setIsMobile(screen.width <= 690);
    if (!isMobile) {
      const logoPosition = logoEl.current.getBoundingClientRect();
      dispatch(setLogoPositionToLeft(logoPosition.width + logoPosition.x));
      dispatch(setFirstHeaderItemPosToLeft(null));
    }
  }, [isMobile]);

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContent}>
        {!isMobile
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        && <img onClick={() => dispatch(setMainTab('order'))} ref={logoEl} src="/header/all-in-logo.svg" alt="logo" />}
        <HeaderNavigationComp className={styles.headerNavigation} />
      </div>
    </div>
  );
};

export default Header;
