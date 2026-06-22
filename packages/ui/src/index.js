import buttonStyles from './Button.module.css';
import cardStyles from './Card.module.css';
import textFieldStyles from './TextField.module.css';

export const Button = ({ children, ...props }) => (
  <button className={buttonStyles.button} {...props}>
    {children}
  </button>
);

export const Card = ({ children }) => (
  <section className={cardStyles.card}>{children}</section>
);

export const TextField = ({ label, id, ...props }) => (
  <label className={textFieldStyles.field} htmlFor={id}>
    <span className={textFieldStyles.label}>{label}</span>
    <input className={textFieldStyles.input} id={id} {...props} />
  </label>
);
