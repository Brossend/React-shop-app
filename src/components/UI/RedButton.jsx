import styles from './RedButton.module.css';

const RedButton = (props) => {
  const { children, onClick, title, disabled } = props;

  return (
    <button
      {...props}
      onClick={() => {
        onClick();
      }}
      className={styles.button}
      title={title}
      disabled={disabled}
    >
      <p className={styles.button__text}>{children}</p>
    </button>
  );
};

export default RedButton;
