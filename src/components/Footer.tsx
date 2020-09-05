import React from "react";

import styles from "../assets/Footer.module.css";

import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram } from "react-icons/fa";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftFooter}>
          <div className={styles.leftFooterItems}>
            <h3>Contact</h3>
            <span>Adress</span>
            <span>City</span>
            <span>Postal code</span>
            <span>Phone</span>
          </div>
          <div>
            <h3>About</h3>
            <span>About us</span>
            <span>References</span>
            <span>Blog</span>
          </div>
          <div>
            <h3>Navigation</h3>
            <Link to="/">
              <span role="img" aria-label="book emoji">
                {" "}
                📖
              </span>{" "}
              Home
            </Link>
            <Link to="/store">Store</Link>
            <Link to="/cart">Cart</Link>
          </div>
        </div>
        <div className={styles.rightFooter}>
          <h3>Socials</h3>
          <Link to="www.facebook.com">
            <FaFacebook className={styles.footerIcon} />
          </Link>
          <Link to="www.instagram.com">
            <FaInstagram className={styles.footerIcon} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
