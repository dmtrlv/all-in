import React, {useState, useEffect, useRef} from 'react';
import cn from 'classnames';
import styles from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setWidget } from '../../action/app';

const Widget = () => {
  const {widget, iframeUrl} = useSelector(s => ({
    widget: s.app.widget,
    iframeUrl: s.app.iframeUrl,
  }))
  const dispatch = useDispatch()
  const iframeEl = useRef();
  const [closeBtnAnimation, setAnimation] = useState(false);
  const clickHandler = (e) => {
    if (widget && !iframeEl.current.contains(e.target)) {
      dispatch(setWidget({widget: false}));
    }
  };

  useEffect(() => {
    document.addEventListener('click', clickHandler);
    return () => {
      document.removeEventListener('click', clickHandler);
    };
  }, [widget]);


  return (
    <div className={cn(styles.widgetContainer, {
      [styles.active]: widget,
    })}
    >
      <div className={styles.iframeContainer}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={() => dispatch(setWidget({widget: false}))}
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
          src={iframeUrl}
        />
      </div>
    </div>
  )
}

export default Widget;
