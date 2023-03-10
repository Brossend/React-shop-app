import styles from './Subfloder.module.css';

function Subfolder({ id, name, onClick }) {
  return (
    <button
      className={styles.subfloder}
      onClick={() => {
        onClick(id);
      }}
    >
      {name}
    </button>
  );
}

export default Subfolder;
