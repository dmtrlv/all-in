import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// styles
import styles from './style.module.css';

import { DISABLED_ITEMS } from '../../constants/index';

const propTypes = {
  list: PropTypes.arrayOf({}),
  active: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  tabWidth: PropTypes.number,
};

const defaultProps = {
  list: [],
  active: '',
  className: '',
  onClick: () => {},
  tabWidth: null,
};

const Navigation = ({
  list,
  active,
  className,
  onClick,
  tabWidth,
}) => (
  <div className={cn(styles.navigationWrapper, {
    [className]: Boolean(className),
  })}
  >
    {list.map((item) => (
      <button
        type="button"
        className={cn(styles.navigationItem, {
          [styles.active]: item.id === active,
          [styles.disabled]: DISABLED_ITEMS.has(item.id),
        })}
        onClick={(e) => onClick(item.id, e)}
        style={{
          minWidth: `${tabWidth}px`,
        }}
      >
        {item.name}
      </button>
    )) }
  </div>
);

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;

export default Navigation;
