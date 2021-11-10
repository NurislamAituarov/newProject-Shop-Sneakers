import './Sneakers.scss';
import { useSelector } from 'react-redux';

const Sneakers = () => {
  const arr = useSelector((state) => state.arr);

  return (
    <div className="sneakers_wrapper">
      {arr.map((item) => {
        return (
          <div key={item.id} className="sneakers_card">
            <div className="sneakers_img">
              <img src={item.url} alt="card" width="180" />
            </div>
            <h4>{item.name}</h4>
            <div className="sneakers_card_price">
              <div>
                <p>ЦЕНА:</p>
                <p>{item.price}руб.</p>
              </div>
              <button>+</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sneakers;
