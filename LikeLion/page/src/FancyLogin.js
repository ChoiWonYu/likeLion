import React,{useState} from 'react';
import styles from './App.module.css';
import { useNavigate} from "react-router-dom"

function FancyLogin(){
    const [text,setText]=useState('');
    const password='0729';
    const navigate=useNavigate();
    function handleChange(e){
        setText(e.target.value);
    }
    function checkPassword(){
        if(text===password){
            navigate('/Fancy');
        }
        else{
            alert('Wrong Password!');
        }
    }
    return (
            <div className={styles.passwordStyle}>pw:<input className={styles.BoxStyle} onChange={handleChange} type="text" placeholder="0729"/>
            <button className={styles.BoxStyle} onClick={checkPassword}>login</button>
            </div>
    )
}
export default FancyLogin;