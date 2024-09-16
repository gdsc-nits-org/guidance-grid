import { useState } from "react";
import app from "../../utils/auth.js";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth"
import { NavLink, Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import styles from "./Navbar.module.scss";
import { useEvent } from "../../Hooks";

const Navbar = () => {
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggleValue) => !prevToggleValue);
  };

  const changeToggle = () => {
    if (window.scrollY >= 90 && window.innerWidth > 1000) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEvent("scroll", changeToggle);
  if(user) {
    return (
        <nav className={toggle ? `${styles.navbar} ${styles.expanded}` : styles.navbar}>
          <Link className={styles.left} to="/">
            <img src="/images/gg.svg" alt="logo" />
          </Link>
          <div className={styles.right}>
            <button className={styles.toggleIcon} onClick={handleToggle}>
              {toggle ? (
                  <Icon icon="maki:cross" width="37"></Icon>
              ) : (
                  <Icon icon="charm:menu-hamburger" width="37" height="37"></Icon>
              )}
            </button>
            <div className={styles.links}>
              <NavLink
                    className={({ isActive }) =>
                        isActive ? `${styles.navlinks} ${styles.active}` : styles.navlinks
                    }
                    to="/home"
                >
                    Home
              </NavLink>
              <NavLink
                  className={({ isActive }) =>
                      isActive ? `${styles.navlinks} ${styles.active}` : styles.navlinks
                  }
                  to="/resources"
              >
                Resources
              </NavLink>
              <NavLink
                  className={({ isActive }) =>
                      isActive ? `${styles.navlinks} ${styles.active}` : styles.navlinks
                  }
                  to="/create-article"
              >
                Article
              </NavLink>
              <Link className={`${styles.profile} ${styles.active}`} to="/user/profile">
                <img className={styles.avatar} alt={"Profile photo of user"} src={user.photoURL} width="37"/>
              </Link>
            </div>
          </div>
        </nav>
    );
  } else {
    return (
        <nav className={toggle ? `${styles.navbar} ${styles.expanded}` : styles.navbar}>
          <Link className={styles.left} to="/">
            <img src="/images/gg.svg" alt="logo" />
          </Link>
          <div className={styles.right}>
            <button className={styles.toggleIcon} onClick={handleToggle}>
              {toggle ? (
                  <Icon icon="maki:cross" width="37"></Icon>
              ) : (
                  <Icon icon="charm:menu-hamburger" width="37" height="37"></Icon>
              )}
            </button>
            <div className={styles.links}>
              <Link to="/signin">
                Sign In
              </Link>
            </div>
          </div>
        </nav>
    );

  }

};

export default Navbar;
