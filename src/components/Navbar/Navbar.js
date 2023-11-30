// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../../firebase.js';
import logo from '../../images/logo.png';

const Navbar = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className={styles.header}>
        <a href="" className={styles.logo}>
          <img src={logo} alt="" />
        </a>


        {/* Navbar Links */}
        <nav className={`${styles.navbar} ${isMenuOpen ? styles.showMenu : ''}`}>
          <a href="/homepage">Home</a>
          <a href="/about">About</a>
          <a href="/templates">Templates</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* User Icons */}
        <div className={styles.icons}>
          {user ? (
            <button className={styles.signOutButton} onClick={handleSignOut}>
              Sign Out
            </button>
          ) : (
            <>
              <button className={styles.LoginButton}>
                <Link to="/login">Login</Link>
              </button>
              <button className={styles.signupButton}>
                <Link to="/signup">Signup</Link>
              </button>
            </>
          )}
        </div>

        {/* Hamburger Icon */}
        <div id="menu-btn" className={styles.menuBtn} onClick={toggleMenu}>
      <FontAwesomeIcon icon={faBars} className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ''}`}/></div>

      </header>
    </div>
  );
};

export default Navbar;
