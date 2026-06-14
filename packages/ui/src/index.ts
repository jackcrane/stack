import type { ButtonHTMLAttributes, InputHTMLAttributes, PropsWithChildren } from 'react';

import buttonStyles from './Button.module.css';
import cardStyles from './Card.module.css';
import textFieldStyles from './TextField.module.css';

export const Button = ({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => (
  <button className={buttonStyles.button} {...props}>
    {children}
  </button>
);

export const Card = ({ children }: PropsWithChildren) => (
  <section className={cardStyles.card}>{children}</section>
);

type TextFieldProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField = ({ label, id, ...props }: TextFieldProps) => (
  <label className={textFieldStyles.field} htmlFor={id}>
    <span className={textFieldStyles.label}>{label}</span>
    <input className={textFieldStyles.input} id={id} {...props} />
  </label>
);
