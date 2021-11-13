import Sneakers from '../sneakers/Sneakers';
import './Section.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { searchValueItem } from '../../actions/action';

const Section = () => {
  let { arr } = useSelector((state) => state);
  const [value, setValue] = useState('');

  const newArr = arr.filter((item) => item.name.includes(value));

  function onChange(e) {
    setValue(e.target.value);
  }
  return (
    <div className="section">
      <div className="header_section">
        <h2>Все кросовки</h2>
        <div className="search">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149309.png"
            width="20"
            alt="search"
          />
          <input onChange={onChange} value={value} type="text" placeholder="Поиск" />
        </div>
      </div>
      <div className="sneakers_wrapper">
        {arr.length !== 0
          ? newArr.map((item) => {
              return <Sneakers key={item.id} item={item} />;
            })
          : [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
              return (
                <div className="sneakers_card skeleton">
                  <div className="div"></div>
                  <span></span>
                  <div className="second">
                    <p></p>
                    <p className="p"></p>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Section;
