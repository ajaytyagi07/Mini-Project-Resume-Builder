import React from 'react';
import styles from'./About.module.css'; // Assuming you have a separate CSS file for About component
import Footer from '../../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCloud, faCoffee, faDatabase, faDriversLicense, faFilePdf } from '@fortawesome/free-solid-svg-icons';
const About = () => {
  return (
    <div>
      <section id={styles.aboutSection}>
          <div className={styles.container}>
              <div className={styles.row}>
                  <div className={styles.sectionTitle}>
                      <h2 data-heading="abouts">About</h2>
                  </div>
              </div>
              <div className={styles.row}>
                   {/* about item start  --> */}
                  <div className={styles.aboutItem}>
                      <div className={styles.aboutItemInner} >
                          <div className={styles.icon} >
                              <i><FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon></i>
                          </div>
                          <h3>Data-Driven Templates</h3>
                          <p>Unlock career success with our intuitive data-driven resume builder. Effortlessly input details, and watch as personalized templates showcase your skills and experience, setting you apart in the professional world.</p>
                      </div>
                  </div>
                   {/* about item end  --> */}
                   {/* about item start  --> */}
                  <div className={styles.aboutItem}>
                      <div className={styles.aboutItemInner} >
                          <div className={styles.icon} >
                          <i><FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon></i>
                          </div>
                          <h3>Get Seen</h3>
                          <p>Maximize visibility with our 'Get Seen' feature. Optimize your online presence, stand out to employers, and boost your career opportunities. Take control of your professional visibility today.</p>
                      </div>
                  </div>
                   {/* about item end  --> */}
                   {/* about item start  --> */}
                  <div className={styles.aboutItem}>
                      <div className={styles.aboutItemInner} >
                          <div className={styles.icon} >
                          <i><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon></i>
                          </div>
                          <h3>It's Free</h3>
                          <p>Experience professional growth without the cost. Unlock the power of our free tools to build an impressive resume and achieve career success effortlessly.</p>
                      </div>
                  </div>
                   {/* about item end  --> */}
                   {/* about item start  --> */}
                  <div className={styles.aboutItem}>
                      <div className={styles.aboutItemInner} >
                          <div className={styles.icon} >
                          <i><FontAwesomeIcon icon={faDriversLicense}></FontAwesomeIcon></i>
                          </div>
                          <h3>Templates</h3>
                          <p>Explore our diverse template collection. Tailor your resume with professional designs, making a lasting impression on employers in any industry.</p>
                      </div>
                  </div>
                   {/* about item end  --> */}
                   {/* about item start  --> */}
                  <div className={styles.aboutItem}>
                      <div className={styles.aboutItemInner} >
                          <div className={styles.icon} >
                          <i><FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon></i>
                          </div>
                          <h3>Convert File</h3>
                          <p>Effortlessly convert your resume to various file formats. Seamlessly switch between formats to suit different job applications and enhance your flexibility.</p>
                      </div>
                  </div>
                   {/* about item end  --> */}
                   {/* about item start  --> */}
                  <div className={styles.aboutItem}>
                      <div className={styles.aboutItemInner} >
                          <div className={styles.icon} >
                          <i><FontAwesomeIcon icon={faCloud}></FontAwesomeIcon></i>
                          </div>
                          <h3>Cloud</h3>
                          <p>Seamlessly store and access your resumes in the cloud. Effortlessly manage and update your professional documents from anywhere, ensuring flexibility and convenience</p>
                      </div>
                  </div>
                   {/* about item end  --> */}
  
              </div>
          </div>
      </section>
       {/* About section ends  --> */}
       <Footer />
  
    </div>
  );
};

export default About;
