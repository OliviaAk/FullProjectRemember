import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import  IconSVG  from '../Icons'
import Close from '../../../assets/icons/close.svg'
import Vk from '../../../assets/icons/vk-brands.svg'
import Google from '../../../assets/icons/google-brands.svg'
import Facebook from '../../../assets/icons/facebook-brands.svg'

const Modal = ({show, closeModal}) => {

  const handleLoginWithFacebookClick = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };
 

  return (
    <div className={ `${styles.modal} ${show ? styles.modalActive : styles.modalHide}`}>
    <div className={styles.modalMain}>
      <div className={styles.modalHeader}>
        <p>Авторизация</p>
        <button className={styles.modalButton} onClick={closeModal}>
          <IconSVG src={Close} />
        </button>
      </div>
      <div className={styles.modalContent}>
        <p className={styles.modalText}>Пожалуйста, авторизуйтесь, чтобы создать ваши видео.</p>
        <div className={styles.modalButtons}>
            <IconSVG className={styles.modalIcon} src={Vk} />
            <IconSVG className={styles.modalIcon} src={Google} />
            <IconSVG className={styles.modalIcon}  src={Facebook} />
        </div>
        </div>
    </div>
  </div>
  );
};
export default Modal;
