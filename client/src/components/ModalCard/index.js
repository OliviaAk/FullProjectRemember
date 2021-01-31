import React, {useEffect, useState} from "react";
import styles from "./styles.module.css";
import ShareButtons from "../shared/Share/sharebuttons.component"
import PropTypes from "prop-types";
import Close from '../../assets/icons/close.svg'
import IconSVG from '../shared/Icons';
import Por1 from '../../assets/images/cardImg.png'
import {LinksShares} from '../../mocks/shares'
import {useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

const ModalCard = ({ }) => {
  
  const history= useHistory()
  const closeModal= ()=>{
    history.push('/')

}
const { userCard } = useSelector((state) => state.dashboardHero);



  return (
    <div className={` ${styles.modal} ${styles.modalActive}`}>
      <div className={ styles.modalMain}>
        <div className={styles.modalHeader}>
        
          <ShareButtons title={LinksShares.title} url={LinksShares.url}
           className={styles.itemShared}/>
          <IconSVG className={styles.icon} handleClickIcon={()=>closeModal()} src={Close}/>
        
        </div>
        <div className={styles.modalContent}>
          <div className={styles.modalText}>
            <div className={styles.imageText}>
            <p>{userCard.firstName}</p>
            <p>{userCard.dateBirth}</p>

            </div>
      

          </div>
       
        <div className={styles.image}>
            <IconSVG  src={Por1}/>
            <p className={styles.imgText}>{userCard.text}</p>

           
          
         </div>  
         
          
        </div>
            
      </div>
    </div>
  );
};
export default ModalCard;
ModalCard.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  item: PropTypes.object,
  locations: PropTypes.array,
};
ModalCard.defaultProps = {
  handleClose: () => null,
  show: false,
  item: 0,

};
