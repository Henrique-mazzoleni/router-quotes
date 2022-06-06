import { NavLink } from "react-router-dom";

import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <h2>Great Quotes</h2>
      <nav>
        <NavLink activeClassName={styles.active} to="/quotes" exact>All Quotes</NavLink>
        <NavLink activeClassName={styles.active} to="/add_quote">Add a Quote</NavLink>
      </nav>
    </header>
  );
};

export default MainHeader;
