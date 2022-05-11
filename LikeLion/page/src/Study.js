import React from 'react';
import Styles from './App.module.css'
function Study(){
    return(
        <div className={Styles.pageStyle}>
            <h1>Project</h1>
                <li className={Styles.pageListStyle}><a href="https://github.com/ChoiWonYu/LikeLion_333"  className={Styles.hrefStyle}>My page</a></li>
            <h1>Algorithm</h1>
                <li className={Styles.pageListStyle}><a href="https://www.acmicpc.net/user/phillip0729"  className={Styles.hrefStyle}>Baekjoon Online Judge</a></li>
        </div>
    )
}
export default Study;