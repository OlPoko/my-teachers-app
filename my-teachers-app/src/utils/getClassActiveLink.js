import clsx from "clsx";

export const getClassActiveLink =
  (styles) =>
  ({ isActive }) =>
    clsx(styles.link, isActive && styles.active);
