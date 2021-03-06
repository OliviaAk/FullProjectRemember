import React,{useState, useEffect, useRef} from 'react'
import Button from '../shared/Button';
import { userHero, userHeroImg } from "../../store/thunks";
import { showCurrentHero } from "../../store/actions";
import styles from './styles.module.css';
import {useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import Next from '../../assets/icons/chevron-right-solid.svg'
import Prev from '../../assets/icons/chevron-left-solid.svg'
import IconSVG from '../shared/Icons';
import Logo from '../../assets/images/unnamed.png'
import {users} from '../../mocks/tape'
export default function Tape() {
    const [selectedItem, setSelectedItem]= useState({})
    const dispatch = useDispatch();
    const history= useHistory()
    const ref = useRef()

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };

    const openModal= (item)=>{
        dispatch(showCurrentHero(item))
        history.push('/userCard')

    }
    return (
        <div className={styles.tapeMain}>
        <div className={styles.tape}>
                <IconSVG src={Prev} handleClickIcon={()=>scroll(-100)} className={styles.btnIcon}/>
            <div className={styles.dashboard} ref={ref}>
                {users.map((u)=>{
                    return(
                        <>
                        <div className={styles.dashboardItem}>
                            <div className={styles.dashboardContent}>
                                <IconSVG className={styles.logo} src={Logo}/> 
                                <div className={styles.itemContext}>    
                                                    
                            <p className={styles.text}>{u.firstName}</p>
                            <p className={styles.text}>{u.dateBirth}</p>
                            </div>
                            </div>
                            <Button onClick={()=>openModal(u)}  buttonSize='btn-nav'>Открыть</Button>
                        </div>
                        </>
                    )
                })}
                
            </div>
                <IconSVG className={styles.btnIcon} handleClickIcon={()=>scroll(100)} src={Next}/>

            
        </div>
        <div className={styles.static}>Открыток на сайте {users.length}</div>
       
       
        </div>
    )
}
