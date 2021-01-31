import React,{useState, useEffect} from 'react'
import styles from './styles.module.css'
import {searchData} from '../../../mocks/heroSearch'
import {  useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from '../../shared/Button';
import { useSelector, useDispatch } from "react-redux";
import { getHeroes, getHero, getHeroByName } from "../../../store/thunks";
import { setHero } from "../../../store/actions";
import {dashboardInfo} from '../../../mocks/dashboard'

export default function Dashboard() {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(()=>{
        dispatch(getHeroes());
    },[dispatch])
    
    const openInfoAboutHero = (id)=>{
        dispatch(setHero(id))
        history.push("/person");
    }
    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboardContainer}>
                <div className={styles.dashboardContent}>
                    <div className={styles.dashboardBg}>
                      <div className={styles.dashboardItems}>
                        {dashboardInfo.map((item,index)=>{
                            return(
                                <div key={index} className={styles.dashboardItem}>
                                <div className={styles.itemImage}>
                                    
                                    <img className={styles.portrait} src={item.img} alt=''/>
                                </div>
                                <div className={styles.itemInfo}>
                                    <div className={styles.itemMainInfo}>
                                    <a className={styles.itemName} href={item.url}>{item.lastName} {item.name}</a>
                                    <p className={styles.itemYears}>{item.date}</p>
                                    </div>
                                    <Button buttonSize='primary-btn3' onClick={()=>openInfoAboutHero({id:item.id})} >Подробнее</Button>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
