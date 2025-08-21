import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <NavLink to="/" className={styles.logo}>
      <svg className={styles.logoIcon} width="30" height="30">
        <use href="../../../public/ukraine.svg" />
      </svg>
      <span className={styles.logoText}>LearnLingo</span>
    </NavLink>
  );
}
