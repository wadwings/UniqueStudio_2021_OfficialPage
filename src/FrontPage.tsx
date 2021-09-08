import React, { useState, useEffect } from 'react';
import styles from './FrontPage.module.scss';
import backgroundImg from './img/BackGroundImage.png';
import logo from './img/Logo.png';
import ScrollDown from './img/ScrollDown.png'
import { titleText, joinUsText } from './data/data';
import Circle from './components/progressCircle/progressCircle';

interface AppProps {}

const App = ({}: AppProps) => {
  const [isShow, setIsShow] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const Titles = titleText.map((item, index) => (
    <div
      key={item}
      onClick={() => {
        setPageIndex(index);
      }}
      className={`${styles.AppTitle} ${styles.DisableUserSelect} ${
        index === pageIndex && styles.AppTitleActived
      }`}
    >
      {item}
    </div>
  ));
  return (
    <div className={styles.AppContainer}>
      <img src={backgroundImg} className={styles.AppBackgroundImg}></img>
      <div className={styles.AppHeader}>
        <div>
          <img src={logo} className={styles.AppLogo}></img>
        </div>
        <div className={styles.AppTitlesBlock}>
          <div className={`${styles.AppTitlesGroup} ${isShow && styles.AppTitlesGroupActived}`}>{Titles}</div>
          <div onClick={() => {setIsShow(!isShow)}} className={`${styles.AppSwitch} ${styles.AppTitle}`}>
            <div className={`${styles.AppSwitchFirst} ${isShow && styles.AppSwitchFirstActive}`}></div>
            <div className={`${styles.AppSwitchSecond} ${isShow && styles.AppSwitchSecondActive}`}></div>
          </div>
        </div>
      </div>
      <div className={styles.AppFooter}>
        <div className={styles.AppFooterSideComponent}>
          <Circle progress={0.2} length={40} thickness={2} activeColor={'#86fafd'} inactiveColor={'#5e5e5f'} ></Circle>
        </div>
        <div className={`${styles.AppFooterScrollText} ${styles.DisableUserSelect}`}>
          <img src={ScrollDown} className={styles.AppFooterScrollTextPic} />
          Scroll
        </div>
        <div className={`${styles.AppFooterSideComponent} ${styles.AppFooterJoinUs} ${styles.DisableUserSelect}`}>{joinUsText}</div>
      </div>  
    </div>
  );
};

export default App;
