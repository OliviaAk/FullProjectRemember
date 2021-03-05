import React,{useState, useEffect} from 'react'
import { Link , useHistory} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import IconSVG from '../../shared/Icons';
import MyCarousel from '../../shared/Slider';
import LogoType from '../../../assets/images/logotype.jpg';
import styles from './styles.module.css';
import {mainData} from '../../../mocks/mainData';
import Button from '../../shared/Button';
import Arrow from '../../../assets/images/arrow.png'
import Solders from '../../../assets/images/solders.jpg'
import Image1 from '../../../assets/images/i1.png'
import Logo from '../../../assets/images/logo.png'
import Start from '../../../assets/images/photo.png'
import Update from '../../../assets/images/update.png'
import End from '../../../assets/images/star.png'
import Modal from '../../shared/Modal'
import Tape from '../../Tape';


export default function Home({}) {
    const history = useHistory()
    const [open,setOpen]=useState(false);

 
    const openUrl = ()=>{
        window.open('https://uploads.knightlab.com/storymapjs/0b00d1b239e2b26a3f630058f4bf7d5c/test/draft.html',"_self")
    }
      
    return (
        <div className={styles.home}>
          <div className={styles.navContainer}>
            <IconSVG handleClickIcon={setOpen} className={styles.navLogo} src={LogoType}/>
           <div className={styles.homeLogo}>Виртуальная стена памяти героев обороны Могилева</div>
           {/* <Button className={styles.logoBtn} onClick={()=>setOpen(true)}
           buttonSize='btn--modal'>Авторизоваться</Button> */}
           </div>
         <div className={styles.homeContainer}>          
                <div className={styles.homeContent}>
                    <div className={styles.carousel}>
                    <MyCarousel/>
                    </div>
                    <div className={styles.mainContent}>
                        <div className={styles.headerContent}>
                            <p>Никто не забыт, ничто не забыто!</p>
                        </div>
                        <div className={styles.mainInfo}>
                            <p className={styles.mainText}>{mainData.text}</p>
                        </div>
                        <div className={styles.mainDashboard}>
                                   <div  className={styles.mainItem}>
                                        <Link to='/' className={styles.mainLinks}>
                                            <div onClick={openUrl}>23 ДНЯ МУЖЕСТВА</div>
                                        </Link>
                                        <div >
                                            <img className={styles.mainImg} onClick={()=>openUrl()} src={Image1} alt=''/>
                                        </div>
                                    </div>
                                    <div  className={styles.mainItem}>
                                        <Link to='/heroes' className={styles.mainLinks}>
                                            <div > ОНИ СРАЖАЛИСЬ ЗА МОГИЛЕВ</div>
                                        </Link>
                                        <div >
                                            <img className={styles.mainImg} onClick={()=>{history.push('/heroes')}} src={Solders} alt=''/>
                                        </div>
                                    </div>
                                    <div  className={styles.mainItem}>
                                        <Link to='/add' className={styles.mainLinks}>
                                            <div >ДОБАВЬТЕ СВОЕГО ГЕРОЯ</div>
                                        </Link>
                                        <div >
                                            <img className={styles.mainImg}  onClick={()=>{history.push('/add')}} src={Logo} alt=''/>
                                        </div>
                                    </div>
                        </div>
                        <div className={styles.createContent}>
                            <p>СОЗДАЙТЕ ОТКРЫТКУ ГЕРОЯ ОБОРОНЫ МОГИЛЕВА</p>
                        </div>
                        <div className={styles.createInfo}>
                            <div className={styles.createItem}>
                                <IconSVG className={styles.createIcon} src={Start}/>
                                <p>Добавьте текст на открытку</p>
                            </div>
                            <div className={styles.line}><IconSVG src={Arrow}/></div>
                            <div className={styles.createItem}>
                                <IconSVG className={styles.createIcon} src={Update}/>
                                <p>Сгенерируйте открытку с вашим героем</p>
                            </div>
                            <div className={styles.line}><IconSVG src={Arrow}/></div>
                            <div className={styles.createItem}>
                                <IconSVG className={styles.createIcon} src={End}/>
                                <p>Сохраните и поделитесь в социальных сетях</p>
                            </div>
                        </div>
                    </div>
                    <Tape/>

                </div>
          </div>
     </div>
    )
}
