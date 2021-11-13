import Sneakers from '../sneakers/Sneakers';
import './Section.scss';
import { useSelector } from 'react-redux';

const Section = () => {
  let { arr } = useSelector((state) => state);

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
          <input type="text" placeholder="Поиск" />
        </div>
      </div>
      <div className="sneakers_wrapper">
        {arr.length !== 0
          ? arr.map((item) => {
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
