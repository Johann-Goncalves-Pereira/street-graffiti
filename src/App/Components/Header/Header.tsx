import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

const SearchSvg = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
        stroke="var(--clr-text-0)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

function Header() {
  const location = useLocation();
  // console.log(location.pathname);

  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src="https://picsum.photos/500"
        alt="Logo"
        aria-label="Graffiti"
      />

      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__list__item}>
            <Link className={styles.link} to="/">
              HOME
            </Link>
          </li>
          <li className={styles.nav__list__item}>
            <Link className={styles.link} to="/about">
              ABOUT
            </Link>
          </li>
          <li className={styles.nav__list__item}>
            <Link className={styles.link} to="/artist">
              ARTIST
            </Link>
          </li>
          <li className={styles.nav__list__item}>
            <Link className={styles.link} to="/services">
              SERVICES
            </Link>
          </li>
          <li className={styles.nav__list__item}>
            <Link className={styles.link} to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>

      <button className={styles.button} type="button">
        <SearchSvg />
      </button>
    </header>
  );
}

export default Header;
