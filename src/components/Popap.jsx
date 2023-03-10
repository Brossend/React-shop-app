import { useEffect } from 'react';
import styles from './Popap.module.css';
import Button from './UI/Button';
import ExitIcon from './UI/ExitIcon';

const AboutProduct = ({ active, setActive, children, description }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    console.log('dd');
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      style={{ height: 120 + '%' }}
      className={
        active ? `${styles.popap} ${styles.popap__active}` : `${styles.popap}`
      }
      onClick={() => {
        setActive(false);
      }}
    >
      <div
        style={{ height: 120 + '%' }}
        className={styles.popap__content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.popap__exitButton}>
          <p className={styles.popap__description}>{description}</p>
          <div className={styles.popap__exit}>
            <Button onClick={setActive} value={false}>
              <ExitIcon />
            </Button>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AboutProduct;
