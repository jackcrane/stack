import { Link } from 'react-router-dom';

import { Button, Card, TextField } from '@template/ui';

import { authRoutes } from '../../../lib/auth';
import styles from './AuthPage.module.css';

export const SignUpPage = () => (
  <Card>
    <div className={styles.wrapper}>
      <h1>Create your account</h1>
      <form className={styles.form}>
        <TextField autoComplete="name" id="signup-name" label="Name" />
        <TextField autoComplete="email" id="signup-email" label="Email" type="email" />
        <TextField autoComplete="new-password" id="signup-password" label="Password" type="password" />
        <Button type="submit">Create account</Button>
      </form>
      <p className={styles.footer}>
        Already have an account? <Link to={authRoutes.signIn}>Sign in</Link>
      </p>
    </div>
  </Card>
);
