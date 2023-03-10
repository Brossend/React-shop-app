import { useEffect, useState } from 'react';
import { tokens, components } from 'react-ui/themes/base';
import { Tabs, ThemeProvider } from 'react-ui';

import styles from './AboutProduct.module.css';
import Ratiting from './UI/Ratiting';
import RedButton from './UI/RedButton';

const API_URL = 'http://test1.web-gu.ru/';

const AboutProduct = ({ id }) => {
  const [props, setProps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(API_URL);
      const props = await res.json();
      setProps(props);
    };
    fetchData();
  }, []);

  components.TabList = {
    borderColor: 'white',
  };
  components.Tab = {
    outline: 'none',
    fontSize: 4,
    height: 8,
    marginRight: 6,
    color: '#424242',
    '&[data-selected]': {
      color: '#FF6969',
    },
  };
  components.TabPanel = {
    fontSize: 3,
    paddingY: 4,
    outline: 'none',
  };

  return props.map(
    (prop, index) =>
      prop.id === id && (
        <div key={index}>
          <img className={styles.product__img} src={prop.img} alt={prop.name} />
          <p className={styles.product__textTitle}>{prop.name}</p>
          <p className={styles.product__textPrice}>{`${prop.price} ₽`}</p>
          <div className={styles.product__tabs}>
            <ThemeProvider tokens={tokens} components={components}>
              <Tabs>
                <Tabs.Tab label="Описание">
                  <p className={styles.product__tabsText}>
                    VIKING A3 - удобное кресло, которое станет удачным выбором
                    для домашнего использования и для офиса. Кресло выдерживает
                    нагрузку до 181 кг. Высота сиденья регулируется при помощи
                    надежного механизма. Спинка качается, при желании ее можно
                    прочно зафиксировать в вертикальном положении. Эргономичная
                    конструкция помогает снизить нагрузку на мышцы и уменьшить
                    усталость от долгой работы за компьютером. Кресло закреплено
                    на прочной и устойчивой
                  </p>
                </Tabs.Tab>
                <Tabs.Tab label="Характеристики">
                  <div className={styles.product__tabsDescription}>
                    {Object.values(prop.props.height).map((description) => (
                      <p className={styles.product__tabsDescriptionText}>
                        {description}
                      </p>
                    ))}
                  </div>
                  <div className={styles.product__tabsDescription}>
                    {Object.values(prop.props.length).map((description) => (
                      <p className={styles.product__tabsDescriptionText}>
                        {description}
                      </p>
                    ))}
                  </div>
                  <div className={styles.product__tabsDescription}>
                    {Object.values(prop.props.width).map((description) => (
                      <p className={styles.product__tabsDescriptionText}>
                        {description}
                      </p>
                    ))}
                  </div>
                </Tabs.Tab>
                <Tabs.Tab label="Отзывы">
                  {prop.reviews.map((prop) => (
                    <div className={styles.product__reviews}>
                      <img
                        className={styles.product__userAvatar}
                        src={prop.avatar}
                        alt={prop.author}
                      />
                      <div className={styles.product__userReview}>
                        <div className={styles.product__rate}>
                          <p className={styles.product__userName}>
                            {prop.author}
                          </p>
                          <Ratiting rate={prop.rate} />
                        </div>
                        <p className={styles.product__userText}>{prop.text}</p>
                      </div>
                    </div>
                  ))}
                </Tabs.Tab>
                <Tabs.Tab label="Оставить отзыв">
                  <form>
                    <p className={styles.product__nameRaiting}>Оценка</p>
                    <div className={styles.product__rating}>
                      <input type="radio" id="star-5" name="rating" value="5" />
                      <label htmlFor="star-5" title="Оценка «5»"></label>

                      <input type="radio" id="star-4" name="rating" value="4" />
                      <label htmlFor="star-4" title="Оценка «4»"></label>

                      <input type="radio" id="star-3" name="rating" value="3" />
                      <label htmlFor="star-3" title="Оценка «3»"></label>

                      <input type="radio" id="star-2" name="rating" value="2" />
                      <label htmlFor="star-2" title="Оценка «2»"></label>

                      <input type="radio" id="star-1" name="rating" value="1" />
                      <label htmlFor="star-1" title="Оценка «1»"></label>
                    </div>
                    <div className={styles.product__nameBlock}>
                      <p className={styles.product__name}>Имя</p>
                      <input
                        className={styles.product__nameInput}
                        type="text"
                        id="name"
                        name="name"
                      />
                      <label for="name" title="Имя"></label>
                    </div>
                    <div className={styles.product__nameBlock}>
                      <p className={styles.product__name}>Отзыв</p>
                      <input
                        className={styles.product__feedback}
                        type="text"
                        id="feedback"
                        name="feedback"
                      />
                      <label for="feedback" title="Отзыв"></label>
                    </div>
                    <RedButton type="submit">Отправить отзыв</RedButton>
                  </form>
                </Tabs.Tab>
              </Tabs>
            </ThemeProvider>
          </div>
        </div>
      )
  );
};

export default AboutProduct;
