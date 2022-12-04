import React from 'react'
import cn from 'classnames';
import styles from "./style.module.css";

const Button = ({children, type = 'button', onClick, className, isStore = false}) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.store]: isStore,
        [className]: Boolean(className)
      })}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
