import styles from './Card.module.css';
import RedButton from './UI/RedButton';

const Card = ({ setActive, prop }) => {
  const { name, price, img, id } = prop;

  return (
    <div className={styles.card}>
      <img
        onClick={() => {
          setActive([true, id]);
        }}
        className={styles.card__image}
        src={img}
        alt={`Фото ${name}`}
      />
      <p
        onClick={() => {
          setActive([true, id]);
        }}
        className={styles.card__textTitle}
      >
        {name}
      </p>
      <p className={styles.card__textPrice}>{`${price} ₽`}</p>
      <div className={styles.card__btn}>
        <RedButton>Добавить в корзину</RedButton>
      </div>
    </div>
  );
};

export default Card;
