import React,{useState, useEffect} from 'react'
import styles from './styles.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {userHero, setPublishCards,deleteCard } from "../../store/thunks";
import Button from '../shared/Button';


export default function Admin() {
    const [items, setItems]= useState([])
    const { usersHeroes } = useSelector((state) => state.dashboardHero);

    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(userHero())

    },[])

    useEffect(()=>{
        if(usersHeroes.length>0){
            setItems(usersHeroes)
        }
    },[usersHeroes])
 
    return (
        <div className={styles.dashboard}>
         <div className={styles.dashboardContainer}>
             <p className={styles.title}>Пользовательские открытки </p>
             <div className={styles.dashboardContent}>
             {items.map((u)=>{
                    return(
                        <div className={styles.dashboardItem}>
                            <div className={styles.itemContext}>         
                            <p className={styles.name}>{u.firstName}</p>
                            <p className={styles.date}>{u.dateBirth}</p>
                            <p className={styles.text}>{u.text}</p>
                            </div>
                            <div className={styles.buttonAdmin}>
                            <>
                            {!u.isShow ? <Button  buttonColor='primary-btn1' onClick={() =>
                          dispatch(setPublishCards({ id: u._id, isShow: !u.isShow }))}>
                              Опубликовать</Button>:<></>}
                              </>
                              <Button buttonColor='primary-btn1' onClick={() =>
                          dispatch(deleteCard({id:u._id}))}>
                              Удалить</Button>
                            </div>
                            
                            
                        </div>
                    )
                })}
             </div>
         
                
            </div>
        </div>
    )
}
