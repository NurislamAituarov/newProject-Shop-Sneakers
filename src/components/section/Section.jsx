import Sneakers from '../sneakers/Sneakers';
import './Section.scss';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ContentLoader from 'react-content-loader';

const Section = () => {
  let { arr } = useSelector((state) => state.reducer);

  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  // console.log('render-Section');

  const newArr = arr.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 500);
  }, []);

  function onChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="section">
      <div className="header_section">
        {!value ? <h2>Все кроcсовки</h2> : <h2>Поиск по названию : {value}</h2>}
        <div className="search">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149309.png"
            width="20"
            alt="search"
          />
          <input onChange={onChange} value={value} type="text" placeholder="Поиск" />
          {value && (
            <button onClick={() => setValue('')} className="btn_search_close">
              X
            </button>
          )}
        </div>
      </div>
      <div className="sneakers_wrapper">
        {loading
          ? newArr.map((item) => {
              return <Sneakers key={item.id} item={item} />;
            })
          : [1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
              return (
                <ContentLoader
                  key={item}
                  className="skeleton"
                  speed={1}
                  width={282}
                  height={346}
                  viewBox="0 0 282 346"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ebebeb">
                  <rect x="11" y="346" rx="5" ry="5" width="88" height="35" />
                  <rect x="34" y="204" rx="5" ry="5" width="180" height="30" />
                  <rect x="183" y="261" rx="5" ry="5" width="27" height="35" />
                  <rect x="33" y="34" rx="16" ry="16" width="180" height="150" />
                  <rect x="97" y="95" rx="0" ry="0" width="0" height="1" />
                  <rect x="96" y="96" rx="0" ry="0" width="1" height="0" />
                  <rect x="35" y="261" rx="5" ry="5" width="94" height="37" />
                  <rect x="100" y="283" rx="0" ry="0" width="10" height="2" />
                  <rect x="89" y="281" rx="0" ry="0" width="21" height="1" />
                </ContentLoader>
              );
            })}
      </div>
    </div>
  );
};

export default Section;
