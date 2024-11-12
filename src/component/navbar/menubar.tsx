"use client"
import React, { useState } from 'react';
import styles from './menubar.module.css';
import Link from 'next/link';
// import Signup from '@/pages/signup/signup';
// import Login from '@/pages/login/login';

function MenuBar() {
  const [showModal, setShowModal] = useState(false);
  const [loginShowModal, logniSetShowModal] = useState(false);

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const openModal = (data: any) => {
    if (data == 'Signup') {
      setShowModal(true);
      
    };
    if (data === 'Login') {

      logniSetShowModal(true)
    }
    document.body.style.position = 'fixed';
  };

  const closeModal = (data: any) => {
    setShowModal(false);
    document.body.style.position = '';
    logniSetShowModal(false)
  };

  return (
    <nav className={styles.menu}>
      <ul className={styles.menuList}>
        <div>
          <li className={styles.menuItem}>
            <Link href="#home">Home</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="about">About</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="ourServices">Services</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="contactUs">Contact</Link>
          </li>
        </div>
        <div>
          <li className={styles.menuItem}>
            <button className={styles.signupButton} onClick={() => openModal('Signup')}>Sign Up</button>
          </li>
          <li className={styles.menuItem}>
            <button className={styles.loginButton} onClick={() => openModal('Login')}>Login</button>
          </li>
        </div>
      </ul>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>&times;</span>
           
            {showModal }
          </div>
        </div>
      )}
      {loginShowModal}
    </nav>
  );
}

export default MenuBar;
