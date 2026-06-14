import { Link } from 'react-router-dom';

import { Button, Card, TextField } from '@template/ui';

import { authRoutes } from '../../../lib/auth';
import styles from './AuthPage.module.css';

export const SignInPage = () => (
  <Card>
    <div className={styles.wrapper}>
      <h1>Welcome back</h1>
      <form className={styles.form}>
        <TextField autoComplete="email" id="signin-email" label="Email" type="email" />
        <TextField
          autoComplete="current-password"
          id="signin-password"
          label="Password"
          type="password"
        />
        <Button type="submit">Sign in</Button>
      </form>
      <p className={styles.footer}>
        Need an account? <Link to={authRoutes.signUp}>Create one</Link>
      </p>
    </div>
  </Card>
);
