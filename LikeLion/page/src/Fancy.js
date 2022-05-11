import React from 'react';
import Styles from './App.module.css'
function Fancy(){
    return(
        <div className={Styles.pageStyle}>
            <h2>Book</h2>
            <ul>
                <li className={Styles.pageListStyle}>Status Anxiety - Alain de Botton</li>
            </ul>
            <h2>Movie</h2>
            <ul>
                <li className={Styles.pageListStyle}>Interstellar - Christopher Nolan</li>
            </ul>
            <h2>Exercise</h2>
            <ul>
                <li className={Styles.pageListStyle}>Footsal</li>
            </ul>
        </div>
    )
}
export default Fancy;