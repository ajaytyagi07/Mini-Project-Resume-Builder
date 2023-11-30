import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub,faInstagram,faLinkedin,faTwitter} from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div id="contact">
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.footerCol}>
              <h4>company</h4>
              <ul>
                <li><a href="#">about us</a></li>
                <li><a href="#">our services</a></li>
                <li><a href="#">privacy policy</a></li>
                <li><a href="#">affiliate program</a></li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4>Plans</h4>
              <ul>
                <li><a href="#">For University</a></li>
                <li><a href="#">For Individual</a></li>
                <li><a href="#">For Students</a></li>
                <li><a href="#">For enterprise</a></li>
              </ul>
            </div>
            <div className={styles.footerCol} id='contact'>
              <h4>Contact</h4>
              <ul>
                <li><a href="#">+919897171205</a></li>
                <li><a href="#">+918865895719</a></li>
                <li><a href="#">xyz@gmail.com</a></li>
                <li><a href="#">abc@gmail.com</a></li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4>follow us</h4>
              <div className={styles.socialLinks}>
                <a href="#"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
