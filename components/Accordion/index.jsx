import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Card from '../Card';

import styles from './style.module.css';

const propTypes = {
  content: PropTypes.arrayOf({}),
  label: PropTypes.string,
  className: PropTypes.string,
  openedCardId: PropTypes.number,
  onClick: PropTypes.func,
  isContentVisible: PropTypes.bool,
  objKey: PropTypes.string,
};

const defaultProps = {
  content: [],
  label: '',
  className: '',
  openedCardId: null,
  onClick: () => {},
  isContentVisible: false,
  objKey: '',
};

const Accordion = ({
  content,
  label,
  className,
  openedCardId,
  onClick,
  isContentVisible,
  objKey,
}) => {
  const [activeCard, setActiveCard] = useState(openedCardId);
  return (
    <div
      className={cn(styles.accordionWrapper, {
        [className]: true,
        [styles.disabled]: !content,
      })}
      onClick={() => [onClick(objKey)]}
    >
      <div
        className={cn(styles.label, {
          [styles.active]: isContentVisible,
        })}
      >
        {label}
      </div>
      {isContentVisible && content ? (
        <div className={styles.content}>
          {content.map((item) => (
            <Card
                id={item.id}
                active={item.id === activeCard}
                title={item.title}
                extraTitle={item.extraTitle}
                content={item.content}
                time={item.time}
                price={item.price}
                withTopGap={item.withTopGap}
                onClick={(e) => [setActiveCard(0), setTimeout(() => { setActiveCard(e); }, 350)]}
                titlePos={item.titlePos}
                titleWeight={item.titleWeight}
                titleSize={item.titleSize}
                titleMaxWidth={item.titleMaxWidth}
                titleAlign={item.titleAlign}
                titleInvert={item.titleInvert}
                withFullWidth={item.withFullWidth}
                withFullHeight={item.withFullHeight}
            />
          ))}
        </div>
      ) : null}

    </div>
  );
};

Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;

export default Accordion;
