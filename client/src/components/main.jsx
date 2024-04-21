import React, { useEffect, useState } from "react";
import styles from '../styles/main.module.css'
import { useLocation, useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'

import Messages from './messages'

// import header from './'

const FIELDS = {
    Username: "username",
    Room: "room"
}

const Main = () =>{
    
    const { name } = FIELDS
    const { search } = useLocation()
    const [values, setValues] = useState("");
    const [params, setParams] = useState({ room: "", user: ""})
    const [val, setVal] = useState("")
    useEffect(()=> {
        
        const searchParams = Object.fromEntries(new URLSearchParams(search))
        setParams(searchParams)
        
        
    }, [search])


    const handleChange = ({target: {value}})=>{
        setValues(value)
    }
   
    const handleClick = (e) =>{
        const isDisabled = Object.values(values).some((value) => !value)
       if(isDisabled) e.preventDefault()
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        setVal(values)
    }
    
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.head}>
                     <h1 className={styles.bub}>
                    Подбери программу для реализации своего проекта
                    </h1>
                    <div className={styles.comp_img}></div>
                </div>
            
                <div className={styles.flex}>
                    <div className={styles.left}>
                        <div className={styles.flex}>
                            <h2 className={styles.filt}>Фильтр</h2>
                            <div className={styles.butWite}>
                                <button className={styles.but}>Сбросить</button>
                            </div>
                        </div>
                        <div className={styles.raz}>
                            <div>
                                <h2>
                                    Сортировка
                                </h2>
                                <div className={styles.grid}>
                                    <div className={styles.flex}>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">от А-Я</label>
                                    </div>
                                    <div className={styles.flex}>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Название фильтра</label>
                                    </div>
                                    <div className={styles.flex}>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Название фильтра</label>
                                    </div>
                                    <div className={styles.flex}>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Название фильтра</label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2>
                                    Поиск по критериям
                                </h2>
                                <div className={styles.grid2}>
                                    <div className={styles.flex}>
                                        <input type="radio" checked="checked" name="radAnswer" id="" />    
                                        <label htmlFor="">Наименование стартапа</label>
                                    </div>
                                    <div className={styles.flex}>
                                        <input type="radio" name="radAnswer" id="" />    
                                        <label htmlFor="">Кто оказывает услуги</label>
                                    </div>
                                    <div className={styles.flex}>
                                        <input type="radio" name="radAnswer" id="" />    
                                        <label htmlFor="">Статус конкурса</label>
                                    </div>
                                    <div className={styles.flex}>
                                        <input type="radio" name="radAnswer" id="" />    
                                        <label htmlFor="">Размер гранта</label>
                                    </div>
                                   
                                </div>
                            </div>
                            <div>
                                <h2>
                                    Сортировка по дате
                                </h2>
                                <div className={styles.dateTim}>
                                    <div className={styles.flex}>
                                        <label htmlFor="">Начало периода</label>
                                        <label className={styles.palka} htmlFor="">Конец периода</label>
                                    </div>
                                    <div className={styles.flex}>
                                        <input type="date" name="" id="" />    
                                        <input className={styles.rig} type="date" name="" id="" />
                                    </div>
                                    <div>

                                    </div>
                                    
                                
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div >
                            <form className={styles.flex} onSubmit={handleSubmit}>
                                <div>
                                    <input 
                                    type="text" 
                                    name="find" 
                                    value={values}
                                    className={styles.find} 
                                    placeholder="Введите название программы"
                                    onChange={handleChange}
                                    autoComplete="off"
                                    required
                                    />
                                </div>
                                <div className={styles.button}>
                                    <input type="submit" onSubmit={handleSubmit} className={styles.buttonSub} value="Искать" />
                                </div>
                            </form>
                        </div>
                        <div>
                            <Messages value={val}  >
                            </Messages>
                        </div>
                        <div>
                            <form action="submit"></form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
    }
  

export default Main