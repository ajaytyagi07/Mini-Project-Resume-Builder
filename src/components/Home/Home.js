import React from "react";
import { signOut } from "firebase/auth";
import styles from "./Home.module.css";
import "./Home.module.css";
import resumeSvg from "./r.gif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import About from "../About/About";

function Home(props) {
  const handleSignOut = async () => {
    try {
      await signOut(props.auth);
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <h2 className={styles.headname}>{props.name ? ` ${props.name}` : "LOGIN"}
      {props.name && <FontAwesomeIcon icon={faUser} className={styles.profileIcon} />}
      </h2>
      
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.heading}>
            A <span>Resume</span> that stands out!<br/>
            Make your own  resume. <span>It's free</span>
          </p>
        </div>
        <div className={styles.right}>
          <img src={resumeSvg} alt="resume" />
        </div>
      </div>
      {/* {props.name && ( */}
        {/* <div className={styles.container}> */}
          {/* <h2>Welcome - {props.name}</h2> */}
          {/* <button className={styles.signOutButton} onClick={handleSignOut}>Sign Out</button> */}
          {/* <Body /> */}
        {/* </div> */}
      {/* )} */}
    
    
       {/* home section starts  --> */}
       <About/>
     </div> 
    
  );
}

export default Home;
