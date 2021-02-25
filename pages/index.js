import React from 'react';

//components
import Header from '../components/Header/index';

// styles
import styles from '../styles/style.module.css';

const Main = ({}) => {
  return(
    <div className={styles.pageContainer}>
      <div className={styles.pageWrapper}>
        <Header />
        <img src='/vercel.svg' alt='b'/>
      </div>
    </div>
  )
};

export default Main;
