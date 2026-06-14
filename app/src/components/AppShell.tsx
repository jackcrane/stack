import { Link, NavLink, Outlet } from 'react-router-dom';

import styles from './AppShell.module.css';

export const AppShell = () => (
  <div className={styles.shell}>
    <header className={styles.header}>
      <Link className={styles.brand} to="/">
        Stack Template
      </Link>
      <nav className={styles.nav}>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/files">Files</NavLink>
        <NavLink to="/signin">Sign in</NavLink>
      </nav>
    </header>
    <main className={styles.main}>
      <Outlet />
    </main>
  </div>
);
