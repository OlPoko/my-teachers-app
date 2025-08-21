import { getClassActiveLink } from "../../utils/getClassActiveLink";
import styles from "./Navigation.module.css";
import { NavLink, Link } from "react-router-dom";
import AuthNav from "../AuthNav/AuthNav";

export default function Navigation() {
  return (
    <nav className={styles.navList}>
      <NavLink to="/" className={getClassActiveLink(styles)}>
        Home
      </NavLink>
      <NavLink to="/teachers" className={getClassActiveLink(styles)}>
        Teachers
      </NavLink>
    </nav>
  );
}
