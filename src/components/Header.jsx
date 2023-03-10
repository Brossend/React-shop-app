import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import Button from './UI/Button';
import IconBasket from './UI/IconBasket';

const Header = ({ onClick }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <Link className={styles.header__logoText} to="/">
          SHOP
        </Link>
      </div>
      <nav>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${styles.header__menuIsActive}`
              : `${styles.header__menu}`
          }
          to="electrodevice"
          end
        >
          Электроприборы
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${styles.header__menuIsActive}`
              : `${styles.header__menu}`
          }
          to="furniture"
          end
        >
          Мебель
        </NavLink>
      </nav>

      <Button>
        <IconBasket />
      </Button>
    </div>
  );
};

export default Header;
