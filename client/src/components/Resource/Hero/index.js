import React,{useState, useEffect} from 'react'
import PropTypes from "prop-types";
import styles from './styles.module.css'
import { useSelector } from "react-redux";
import {dashboardInfo} from '../../../mocks/dashboard'
import Button from '../../shared/Button'
import { Link , useHistory} from "react-router-dom";


export default function Hero() {
    const [hero,setHero]= useState({})
    const { current, currentSearch} = useSelector((state) => state.dashboardHero);
    const history = useHistory()

   useEffect(()=>{
       if(current){
        const d = dashboardInfo.find(currentValue => currentValue.id === current.id )
        setHero(d)
       }
   },[current])

   useEffect(()=>{
    if(currentSearch){
        setHero(currentSearch)
    }
},[currentSearch])
const returnDashboard = ()=>{
    history.push('/heroes')
}

    return (
        <div className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <div className={styles.heroMain}>
                            <div className={styles.heroHeader}>
                                <p className={styles.heroUrl}>{hero.name} {hero.lastName} </p>
                                <p>{hero.date}</p>
                            </div> 
                            <div className={styles.mainHero}>
                            <div className={styles.heroTextOne}>
                                <p className={styles.heroTextLeft}>{hero.textFullOne}</p>
                                <p>{hero.textFullTwo}</p>
                                <p>{hero.textFullTree}</p>

                            </div >
                            </div>    
                            <Button className={styles.btnHero} onClick={()=>returnDashboard()} buttonSize='primary-back'>Назад</Button>
                 
                        </div>
               </div>
            </div>
        </div>
    )
}
