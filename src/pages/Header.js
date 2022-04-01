import { useState } from "react";
import styles from "./Header.module.css";
import img from "./smile.png";
import {Link} from "react-router-dom";
import classNames from 'classnames'

function Header(){
  const [headnav, setHeadNav]=useState(false);

  const changeheadercolor=()=>{
      if(window.scrollY>60){
        setHeadNav(true);
      }else{
        setHeadNav(false);
      }
  }

  window.addEventListener("scroll",changeheadercolor);

  return(
    <nav className={headnav ? classNames(styles.tophead, styles.active) : styles.tophead}>
        <div className={styles.topheadin}>
            <div className={styles.topheadmenu}>
              <div className={styles.menuicon}>
                <Link to={"/"}>
                  <img src={img} alt="logo"/>
                </Link>
              </div>
              <div className={styles.menulists}>
                <Link to={"/skills"}>ABCDEFG</Link>
                <a href="https://www.naver.com/">ABCDEFG</a>
                <a href="https://www.naver.com/">ABCDEFG</a>
              </div>
              <div className={styles.topheadprofile}>
                N
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Header;