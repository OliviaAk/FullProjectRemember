import React,{useState, useEffect} from 'react'
import { useForm, FormProvider } from "react-hook-form";
import styles from './styles.module.css'
import Input from '../shared/Input'
import { useSelector, useDispatch } from "react-redux";
import { createNewHero,uploadImg } from "../../store/thunks";
import {useHistory} from 'react-router-dom'
import Button from '../shared/Button'
import Upload from '../shared/ImageContainer'


export default function AddHero() {
  const dispatch = useDispatch();
  const history = useHistory()


    const methods = useForm({ mode: "onBlur" });

    const {
      register,
      handleSubmit,
      reset,
      formState: { isSubmitSuccessful, isValid },
    } = methods;
    const { img} = useSelector((state) => state.dashboardHero);


    useEffect(()=>{
        dispatch(uploadImg())
    },[])
   
    const handleClickForm = (data)=>{
      dispatch(createNewHero(data))
      history.push('/')

    }
    useEffect(()=>{
      if(isSubmitSuccessful){
        reset('firstName',' ');
        reset('dateBirth',' ');      
        reset('text','')
      }
    },[isSubmitSuccessful])
    return (
        <FormProvider {...methods}>
        <div className={styles.dashboard}>
         <div className={styles.dashboardContainer}>
                 
           <div className={styles.dashboardContent}>
              <form className={styles.addForm} onSubmit={handleSubmit(handleClickForm)}>
                 <div className={styles.formContent}>
               
               
                    <div className={styles.image}>    
                 {/*  <Upload/>  */  }               
                </div>
                 <div className={styles.text}>
                  <Input
                  placeholder="Имя героя"
                  type="text"
                  name="firstName"
                  maxLength={{ value: 40, message: "Максимальное количество символов" }}
                />
                <Input
                  placeholder="Годы жизни"
                  type="text"
                  name="dateBirth"
                  maxLength={{ value: 20, message: "Максимальное количество символов" }}
                />
                <div>
                <textarea className={styles.textareaItemFirst}
                ref={register({required: { value: true, message: "Поле обязательно для заполнения" }, maxLength:{value:285, message:'Превышено количество символов'}})} name='text'
                  placeholder='Краткая биография героя'/>
              </div>
            
            </div> 
            </div> 
            <div className={styles.btnForm}>
            <Button
            buttonSize='primary-btn3' 
            onClick={handleSubmit(handleClickForm)}>Опубликовать</Button>
            </div>
            </form>
                  
            
                    
                </div>
                
                
            </div>
        </div>
    </FormProvider>
    )
}
