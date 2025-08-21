import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Navigation />
        <AuthNav />
        {/* <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Favorites
          </NavLink> */}
      </div>
    </header>
  );
}
