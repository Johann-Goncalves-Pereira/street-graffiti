import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

export default Header;
