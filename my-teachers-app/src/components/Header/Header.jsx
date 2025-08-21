import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import AuthNav from "../AuthNav/AuthNav";
import { getClassActiveLink } from "../../utils/getClassActiveLink";
import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />

        <nav className={styles.nav}>
          <NavLink to="/" className={getClassActiveLink(styles)}>
            Home
          </NavLink>
          <NavLink to="/teachers" className={getClassActiveLink(styles)}>
            Teachers
          </NavLink>

          <AuthNav />
          {/* <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Favorites
          </NavLink> */}
        </nav>
      </div>
    </header>
  );
}
