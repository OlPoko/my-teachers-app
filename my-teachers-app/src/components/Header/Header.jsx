import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          LangApp
        </Link>

        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/teachers"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Teachers
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Favorites
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
