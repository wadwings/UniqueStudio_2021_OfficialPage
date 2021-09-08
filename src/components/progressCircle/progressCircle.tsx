import type { FC } from 'react';
import React from 'react'
import styles from './circle.module.scss'
interface circleProps {
  progress: number;
  length: number;
  thickness: number;
  activeColor: string;
  inactiveColor: string;
}

const Circle: FC<circleProps> = (props) => {
  const { progress, length, thickness, activeColor, inactiveColor } = props;
  let realProgress = progress > 0.5 ? progress - 0.5 : progress;

  const backCircleStyles = {
    width: `${length}px`,
    height: `${length}px`,
    border: `${thickness}px solid ${activeColor}`,
  };
  const firstCircleStyles = {
    width: `${length}px`,
    height: `${length}px`,
    borderWidth: `${thickness}px`,
    borderColor: `${inactiveColor} transparent ${inactiveColor} transparent`,
    transform: `rotate(${progress > 0.5 ? realProgress * 360 - 45 : -45}deg)`,
  };
  const secondCircleStyles = {
    width: `${length}px`,
    height: `${length}px`,
    borderWidth: `${thickness}px`,
    borderColor: `transparent ${inactiveColor} transparent ${inactiveColor}`,
    transform: `rotate(${realProgress * 360 - 45}deg)`,
  };
  const anotherSecondCircleStyles = {
  }
  return (
    <div style={backCircleStyles} className={`${styles.circle} ${styles.backCicrle}`}>
      <div style={firstCircleStyles} className={`${styles.circle} ${styles.firstCircle}`}></div>
      {progress <= 0.5 ? <div style={secondCircleStyles} className={`${styles.circle} ${styles.secondCircle}`}></div>
      : <div style={anotherSecondCircleStyles} className={`${styles.circle} ${styles.secondCircle}`} />}
    </div>
  );
};

export default Circle;
