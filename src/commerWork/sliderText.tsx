// components/HelloMessage.js
'use client'
import { useEffect, useState } from 'react';
import styles from './sliderText.module.css';

const HelloMessage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100); // slight delay to ensure page load
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`${styles.message} ${visible ? styles.visible : ''}`}>
        Transforming Spaces, Elevating Lives
      </div>
      <div></div>
    </>
  );
};

export default HelloMessage;
