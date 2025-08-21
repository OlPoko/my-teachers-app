import { NavLink } from "react-router-dom";

import { getClassActiveLink } from "../../utils/getClassActiveLink";
import styles from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <>
      <NavLink to="/login" className={getClassActiveLink(styles)}>
        Log in
      </NavLink>
      <NavLink to="/register" className={getClassActiveLink(styles)}>
        Register
      </NavLink>
    </>
  );
}
