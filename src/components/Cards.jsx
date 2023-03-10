import { useEffect, useState } from 'react';
import Card from './Card';

import styles from './Cards.module.css';

const API_URL = 'http://test1.web-gu.ru/';

const Cards = ({ setActive, id }) => {
  const [props, setProps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(API_URL);
      const props = await res.json();
      setProps(props);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.cards}>
      {props.map(
        (prop, index) =>
          prop.parent_id === id && (
            <Card setActive={setActive} key={index} prop={prop} />
          )
      )}
    </div>
  );
};

export default Cards;
