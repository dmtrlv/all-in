import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setPartVisibility} from '../../../action/app';
import cn from 'classnames';

// customHooks
import useScreen from '../../../customHooks/useScreen';

// styles
import styles from './styles.module.css';

const OrderFrame = () => {
  const iframeEl = useRef();
  const dispatch = useDispatch();
  const [widget, setWidget] = useState(false);
  const [closeBtnAnimation, setAnimation] = useState(false);
  const [showGallery, setGalleryVisibility] = useState(false);
  const screen = useScreen();
  const isMobile = screen.width <= 690;
  const { logoPosition, firstHeaderItemPos, showParts } = useSelector((s) => ({
    logoPosition: s.app.logoPosition,
    firstHeaderItemPos: s.app.firstHeaderItemPos,
    showParts: s.app.showParts,
  }));

  const clickHandler = (e) => {
    if (widget && !iframeEl.current.contains(e.target)) {
      setWidget(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', clickHandler);
    return () => {
      document.removeEventListener('click', clickHandler);
    };
  }, [widget]);

  useEffect(() => {
    setTimeout(() => dispatch(setPartVisibility(true), 50));
  }, [])

  return (
    <div className={styles.frameWrapper}>
      <div
        className={cn(styles.leftPart, {
          [styles.showLeftPart]: showParts,
          [styles.fullWidth]: showGallery,
        })}
        onMouseEnter={!isMobile ? () => setGalleryVisibility(true) : () => {}}
        onMouseLeave={!isMobile ? () => setGalleryVisibility(false) : () => {}}
        onClick={isMobile ? () => setGalleryVisibility(!showGallery) : () => {}}
        style={{ maxWidth: `${logoPosition || firstHeaderItemPos}px` }}
      >
        <img
          src="/gallery.png"
          className={styles.gallery}
          alt="gallery"
          srcSet="/gallery.png 2x"
        />
      </div>
      <div className={cn(styles.rightPart, {
        [styles.showRightPart]: showParts,
      })}>
        <div className={styles.slogan}>
          <div className={styles.accent}>ДЕВИЗ*</div>
          <div className={styles.sloganText}>
            {isMobile ? '' : '*Девиз - краткое изречение, обычно выражающее руководящую идею поведения или деятельности.'}
          </div>
        </div>
        <div className={styles.heading}>
          <h1 className={styles.mainTitle}>ЗА ВАШУ ГОЛОВУ МЫ ОТВЕЧАЕМ СВОЕЙ</h1>
          <div className={styles.description}>
            <p className={styles.subTitle}>
              А также, отвечаем и за свои слова. Мы сделаем качественно и красиво.
              Вы сможете отвлечься от всех проблем. В общем, меньше слов, больше дел. Ждём Вас!
            </p>
          </div>
        </div>
        <button className={styles.button} type="button" onClick={() => setWidget(true)}>
          Записаться
        </button>
        {isMobile && (
        <div className={styles.bottomPartForMobile}>
          <span className={styles.text}>Пн-Вс, 9:00-22:00</span>
          <span className={styles.text}>Итальянская ул., 16, 19 A</span>
          <div className={styles.logoBox}>
            <img src="/header/logo-small.svg" alt="main-logo" />
          </div>
        </div>
        )}
      </div>
      <div className={cn(styles.widgetContainer, {
        [styles.active]: widget,
      })}
      >
        <div className={styles.iframeContainer}>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => setWidget(false)}
          >
            <img
              onMouseEnter={() => setAnimation(true)}
              onMouseLeave={() => setAnimation(false)}
              className={cn(styles.icon, {
                [styles.spin]: closeBtnAnimation,
              })}
              src="/close.svg"
              alt="close-icon"
            />
          </button>
          <iframe
            ref={iframeEl}
            className={styles.iframe}
            title="widget"
            src="https://n451950.yclients.com/company:428417/idx:0/master?o=m1246829"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderFrame;
