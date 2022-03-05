import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

// styles
import styles from './style.module.css';

const propTypes = {
  title: PropTypes.string,
  extraTitle: PropTypes.string,
  time: PropTypes.string,
  price: PropTypes.string,
  withTopGap: PropTypes.bool,
  active: PropTypes.bool.isRequired,
  id: PropTypes.number,
  onClick: PropTypes.func,
  withFullWidth: PropTypes.bool,
  content: PropTypes.string,
  className: PropTypes.string,
  isSmall: PropTypes.bool,
  withRightGap: PropTypes.bool,
  withFullHeight: PropTypes.bool,
};

const defaultProps = {
  title: '',
  extraTitle: '',
  time: '',
  price: '',
  withTopGap: false,
  id: null,
  onClick: () => {},
  withFullWidth: false,
  content: '',
  className: '',
  isSmall: false,
  withRightGap: false,
  withFullHeight: false,
};

const Card = ({
  title,
  extraTitle,
  time,
  price,
  withTopGap,
  withRightGap,
  active,
  id,
  onClick,
  withFullWidth,
  content,
  className,
  isSmall,
  withFullHeight,
}) => (
  <div
    className={cn(styles.cardWrapper, {
      [styles.withTopGap]: withTopGap,
      [styles.withRightGap]: withRightGap,
      [styles.active]: active,
      [styles.withFullWidth]: withFullWidth,
      [styles.small]: isSmall,
      [styles.fullHeight]: withFullHeight,
      [className]: true,
    })}
    onClick={(e) => active ? () => {} : onClick(id, e)}
  >
    <div className={styles.titleBlock}
    >
      <h2
        className={cn(styles.cardTitle, {
          [styles.active]: active,
        })}
      >
        {title}
        {extraTitle ? (
          <p className={styles.extraTitle}>{extraTitle}</p>
        ) : null}
      </h2>
    </div>

    {active ? (
      <div className={cn(styles.cardInfo, {
        [styles.withWhiteBg]: Boolean(content),
        [styles.fullHeight]: withFullHeight,
      })}
      >
        {time && price ? (
          <>
            <div className={styles.infoBlock}>
              <p className={styles.infoName}>Длительность</p>
              <p className={styles.value}>
                {time}
                мин
              </p>
            </div>
            <div className={styles.infoBlock}>
              <p className={styles.infoName}>Стоимость</p>
              <p className={styles.value}>
                {price}
                ₽
              </p>
            </div>
          </>
        ) : (
          <div className={styles.infoBlock}>
            {content}
          </div>
        )}
      </div>
    ) : null}
  </div>
);

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
