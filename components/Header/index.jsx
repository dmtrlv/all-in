import React from 'react';
import styles from './styles.module.css';



//assets
import allInLogo from '../../public/all.svg';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContent}>
        {/*<img src='/all.svg' alt='all-in-logo'/>*/}
        <img src='/vercel.svg' alt='vercel'/>
        <div className={styles.headerMenuWrapper}>
          MENU
        </div>
      </div>
    </div>
  );
};

export default Header;
