import React, { useContext } from "react";

//styles
import styles from "../assets/Nav.module.css";

import { NavLink } from "react-router-dom";
import { BookContext } from "../context/context";

interface Props {}

const Nav = (props: Props) => {
  const context = useContext(BookContext);
  const { cart } = context;
  // console.log(cart);

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <div className={styles.rightLinks}>
          <NavLink to="/" exact activeClassName={styles.active}>
            <span role="img" aria-label="book emoji">
              📖
            </span>{" "}
            Home
          </NavLink>
          <NavLink to="/store" exact activeClassName={styles.active}>
            Store
          </NavLink>
        </div>
        <div className={styles.leftLinks}>
          <NavLink to="/cart" exact activeClassName={styles.active}>
            Cart
          </NavLink>
          {/* {cart} */}
          {/* {cart.length !== 0 ? ( */}
          {cart !== null ? (
            <span className={styles.pill}>{cart.length}</span>
          ) : (
            <span className={styles.pill}>0</span>
          )}

          {/* ) : (
             <span className={styles.pill}>0</span>
           )} */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
