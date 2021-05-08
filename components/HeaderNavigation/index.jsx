import React, {
  useEffect, useRef, useState, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFirstHeaderItemPosToLeft,
  setLogoPositionToLeft,
  setMainTab,
  setPartVisibility
} from '../../action/app';
import { DISABLED_HEADER_NAV_ITEMS } from '../../constants/index';

// styles
import styles from './style.module.css';

// customHooks
import useScreen from '../../customHooks/useScreen';

// content
import HeaderContent from '../Header/content';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const HeaderNavigationComp = ({ className }) => {
  const dispatch = useDispatch();
  const firstHeaderEl = useRef();
  const [activeTab, setActiveTab] = useState('order');
  const [isMobile, setIsMobile] = useState(false);
  const { mainTab } = useSelector((s) => ({
    mainTab: s.app.mainTab,
  }));
  const screen = useScreen();
  const slicedHeaderContent = useMemo(
    () => (!isMobile ? HeaderContent : HeaderContent.slice(0, 4)),
    [isMobile],
  );

  const navigationClick = (itemName) => {
    if (mainTab !== itemName) {
      dispatch(setPartVisibility(false));
      setTimeout(() =>  dispatch(setMainTab(itemName)), 500)
        setActiveTab(itemName);
    }
  }

  useEffect(() => {
    setIsMobile(screen.width <= 690);
    if (isMobile) {
      const fistItemPos = firstHeaderEl.current.getBoundingClientRect();
      dispatch(setFirstHeaderItemPosToLeft(fistItemPos.width + fistItemPos.x));
      dispatch(setLogoPositionToLeft(null));
    }
  }, [isMobile]);
  return (
    <div className={cn(styles.navigationWrapper, {
      [className]: Boolean(className),
    })}
    >
      {slicedHeaderContent.map((item, id) => (
        <div
          ref={id === 0 ? firstHeaderEl : null}
          className={cn(styles.menuItem, {
            [styles.active]: activeTab === item.name,
            [styles.disabled]: DISABLED_HEADER_NAV_ITEMS.has(item.name),
          })}
          onClick={() => navigationClick(item.name)}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

HeaderNavigationComp.propTypes = propTypes;
HeaderNavigationComp.defaultProps = defaultProps;

export default HeaderNavigationComp;
