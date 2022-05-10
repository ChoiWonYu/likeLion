import React from 'react'; 
import { Link } from 'react-router-dom';
import styles from './App.module.css'

function Header(){
    return(
        <>
            <Link to="/" className={styles.linkStyle}>
                <h1 className={styles.headerStyle}>choi</h1>
            </Link>
        </>
    )
}

export default Header;