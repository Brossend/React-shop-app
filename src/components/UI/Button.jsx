import styles from './Button.module.css';

const Button = (props) => {
  const { children, onClick, title, disabled, value } = props;

  return (
    <button
      {...props}
      onClick={() => {
        onClick(value);
      }}
      className={styles.button}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
