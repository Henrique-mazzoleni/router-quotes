import { NavLink } from "react-router-dom";

import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <h2>Great Quotes</h2>
      <nav>
        <NavLink activeClassName="active" to="/quotes">All Quotes</NavLink>
        <NavLink activeClassName="active" to="/quotes/add">Add a Quote</NavLink>
      </nav>
    </header>
  );
};

export default MainHeader;
