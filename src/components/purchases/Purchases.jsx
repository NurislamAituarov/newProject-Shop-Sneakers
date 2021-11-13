import { useSelector } from 'react-redux';

import './purchases.scss';
import { NavLink } from 'react-router-dom';

const Purchases = () => {
  const likedArr = useSelector((state) => state.likedArr);

  console.log(likedArr);
  return (
    <>
      <div className="liked">
        <NavLink to="/" className="back">
          <img width="15" src="https://cdn-icons-png.flaticon.com/512/54/54782.png" alt="left" />
        </NavLink>
        <h1>Выбранные </h1>
      </div>
      {likedArr.length !== 0 ? (
        <div className="wrapper_like">
          {likedArr.map((item) => {
            return (
              <div key={item.id} className="sneakers_card">
                <img width="180" height="180" src={item.url} alt="like" />
                <h5>{item.name}</h5>
                <div className="card_price">
                  <div>
                    <p>Цена</p>
                    <p>{item.price}</p>
                  </div>
                  <button>+</button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="noPurchases">
          <img
            width="100"
            src="https://cdn-icons-png.flaticon.com/512/742/742753.png"
            alt="smile"
          />
          <h5>У вас нет заказов</h5>
          <p>Нужно что нибудь купить или выбрать</p>
          <NavLink className="button" to="/">
            back
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Purchases;
