import { useEffect, useState } from 'react';
import Cards from './Cards';
import Subfolder from './Subfolder';

import styles from './Output.module.css';
import Popap from './Popap';
import AboutProduct from './AboutProduct';

const API_URL = 'http://test1.web-gu.ru/';

const Output = ({ id }) => {
  const [props, setProps] = useState([]);
  const [idSubfloder, setIdSubfloder] = useState();
  const [aboutProductActive, setAboutProductActive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(API_URL);
      const props = await res.json();
      setProps(props);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.output}>
      <div style={{ height: 120 + 'vh' }} className={styles.output__menu}>
        {props.map(
          (prop, index) =>
            prop.parent_id === id && (
              <Subfolder
                key={index}
                id={prop.id}
                name={prop.name}
                onClick={setIdSubfloder}
              />
            )
        )}
      </div>
      <Cards setActive={setAboutProductActive} id={idSubfloder} />
      {aboutProductActive && (
        <Popap
          active={aboutProductActive}
          setActive={setAboutProductActive}
          description="Информация"
        >
          <AboutProduct id={aboutProductActive[1]} />
        </Popap>
      )}
    </div>
  );
};

export default Output;
