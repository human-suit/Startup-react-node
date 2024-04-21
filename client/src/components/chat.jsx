import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import io from 'socket.io-client'

import styles from '../styles/chat.module.css'


// const socket = io.connect('http://localhost:5000')

const Chat = () => {
    
    const { search } = useLocation()
    const [params, setParams] = useState({ room: "", user: ""}) 
    const [state, setState] = useState([])
    const [message, setMessage] = useState("")


    // useEffect(()=> {
    //     const searchParams = Object.fromEntries(new URLSearchParams(search))
    //     setParams(searchParams)
    //     socket.emit('join', searchParams)
        
    // }, [search])

    // useEffect(()=> {
    //     socket.on('message', ({data})=>{
            
    //         setState((_state) => [..._state, data])
            
    //     })
    // }, [])
    // console.log({state})

    const leftRoom = () =>{

    }
    const handleChange = () =>{

    }
    const handleSubmit = () =>{

    }

    return (
        <div>
            <div>
                <div>
                {params.room}
                </div>
                <div>
                0 users
                </div>
                <div>
                <button onClick={leftRoom}>
                    left the rooom
                </button>
                </div>
            </div>
            <div>
                {state.map(({message}, index) => <span key={index}> {message} </span>)}
            </div>
            <form className="">
                <div className={styles.pro}>
                    <input 
                    type="text" 
                    name="message" 
                    value={message}
                    className={styles.input} 
                    placeholder="message"
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    />
                </div>
                <div className={styles.button}>
                    <input type="submit" onSubmit={handleSubmit} value="Send a message" />
                </div>
            </form>
        </div>
    )
}

export default Chat