import './App.css';
import styles from './App.module.css';
import cloud from './cloud.png';
import { Link} from "react-router-dom";

function Home(){
    return (
    <div className={styles.listStyle}>
        <div className={styles.menuWrap}>  
          <div className={styles.imgStyle}><img src={cloud} alt='cloud'/></div>
          <div className={styles.hoverStyle}><div className={styles.textStyle }><Link to="./StudyLogin" className={styles.linkStyle}>study</Link></div></div>
        </div>
        <div className={styles.menuWrap}>  
          <div className={styles.imgStyle}><img src={cloud} alt='cloud'/></div>
          <div className={styles.hoverStyle}><div className={styles.textStyle}><Link to="./FancyLogin" className={styles.linkStyle}>fancy</Link></div></div>
        </div> 
    </div>
    )
}
export default Home;