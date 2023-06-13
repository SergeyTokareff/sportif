import styles from './Footer.module.scss';
import '../../index.scss';
import Button from '../../UI/Button';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerTop}>
        <div className={`container ${styles.footerContainer}`}>
          <div className="footerBlock">
            <ul className={styles.blockList}>
              Ordering online
              <li className="blockItem">
                <a href="/" className={styles.blockLink}>
                  Account Login
                </a>
              </li>
              <li className="blockItem">
                <a href="/" className={styles.blockLink}>
                  Our Guarantee
                </a>
              </li>
              <li className="blockItem">
                <a href="/" className={styles.blockLink}>
                  Sportif Stretch Guide
                </a>
              </li>
              <li className="blockItem">
                <a href="/" className={styles.blockLink}>
                  Size Chart & Sizing Information
                </a>
              </li>
              <li className="blockItem">
                <a href="/" className={styles.blockLink}>
                  Hemming Information
                </a>
              </li>
              <li className="blockItem">
                <a href="/" className={styles.blockLink}>
                  Ordering & Payment
                </a>
              </li>
              <li className="blockItem">
                <a href="/" className={styles.blockLink}>
                  Shipping Information
                </a>
              </li>
              <li className="blockItem">
                <a href="/" className={styles.blockLink}>
                  Returns
                </a>
              </li>
            </ul>
          </div>
          <div className="footerBlock">
            <ul className={styles.blockList}>
              About sportif
              <li className="blockItem">
                <a href="/" className={styles.blockLink}>
                  COVID-19 Response
                </a>
              </li>
              <li className="blockItem">
                <a href="/" className={styles.blockLink}>
                  History
                </a>
              </li>
              <li className="blockItem">
                <a href="/" className={styles.blockLink}>
                  Legacy
                </a>
              </li>
              <li className="blockItem">
                <a href="/" className={styles.blockLink}>
                  Good Sam Program
                </a>
              </li>
              <li className="blockItem">
                <a href="/" className={styles.blockLink}>
                  Privacy & Security
                </a>
              </li>
              <li className="blockItem">
                <a href="/" className={styles.blockLink}>
                  Terms & Conditions
                </a>
              </li>
              <li className="blockItem">
                <a href="/" className={styles.blockLink}>
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="footerBlock">
            <ul className={styles.blockList}>
              Quick links
              <li className="blockItem">
                <a href="/" className={styles.blockLink}>
                  FAQs
                </a>
              </li>
              <li className="blockItem">
                <a href="/" className={styles.blockLink}>
                  Shop Online Catalog
                </a>
              </li>
              <li className="blockItem">
                <a href="/" className={styles.blockLink}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="footerBlock">
            <ul className={styles.blockList}>
              Get to know us
              <li className={`${styles.blockLink} ${styles.blockLinkSignUp}`}>
                Sign up for our weekly newsletter and get a 10% off coupon by
                email for your first order!
              </li>
              <li className={styles.blockLink}>Sign Up for Our Newsletter:</li>
            </ul>
            <div className={styles.subscribeField}>
              <input type="email" placeholder="Email address" />
              <Button className={`btn ${styles.subscribeBtn}`}>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={`container ${styles.footerContainer}`}>
          ©2021 Sportif Mailorder. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
