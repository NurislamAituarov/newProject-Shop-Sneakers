import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { boughtSneakersRemove } from '../../actions/action';
import { Helmet } from 'react-helmet';
import '../selected/purchases.scss';
import './bought.scss';
import '../sneakers/Sneakers.scss';

import image from '../../image/heart.png';

const Bought = () => {
  let boughtSneakers = useSelector((state) => state.basketReducer.bought);
  const dispatch = useDispatch();
  // console.log(boughtSneakers);

  useEffect(() => {
    boughtSneakers && localStorage.setItem('boughtSneakers', JSON.stringify(boughtSneakers));
    dispatch(boughtSneakersRemove());
  });

  let newBoughtSneakers = localStorage.getItem('boughtSneakers');
  newBoughtSneakers = JSON.parse(newBoughtSneakers);

  if (newBoughtSneakers) {
    boughtSneakers = [...newBoughtSneakers, ...boughtSneakers];
  }
  const date = new Date();
  return (
    <>
      <Helmet>
        <meta name="description" content="Web site created using create-react-app" />
        <title>React Bought</title>
      </Helmet>
      <div className="liked">
        <NavLink to="/newProject-Shop-Sneakers" className="back">
          <img width="15" src="https://cdn-icons-png.flaticon.com/512/54/54782.png" alt="left" />
        </NavLink>
        <h1>Купленные </h1>
      </div>
      {boughtSneakers ? (
        <div className="wrapper_bought">
          {boughtSneakers.map((item) => {
            return (
              <div key={item.id} className="sneakers_card">
                <img width="50" className="like like_bought" src={image} alt="like" />
                <img width="180" height="180" src={item.url} alt="like" />
                <h5>{item.name}</h5>
                <div className="card_price">
                  <div>
                    <p>Цена</p>
                    <p>{item.price}</p>
                  </div>
                  <img
                    src="https://as2.ftcdn.net/v2/jpg/03/03/72/13/500_F_303721320_IE2JJEW9JLhuIzzoIsBDLuZ3silkP3zX.jpg"
                    alt="selected"
                    width="35"
                  />
                </div>
                <span id="arrival_time">
                  {
                    <div id="time">
                      <p>Время заказа: </p>
                      {date.getFullYear() +
                        '  ' +
                        date.getDate() +
                        '  ' +
                        new Date().toLocaleString('ru', { month: 'long' })}
                    </div>
                  }
                  {
                    <div>
                      <p>Время прибытие заказа: </p>
                      {date.getFullYear() +
                        '  ' +
                        (date.getDate() + 15 > 31
                          ? date.getDate() + 15 - 31
                          : date.getDate() + 15) +
                        '  ' +
                        new Date().toLocaleString('ru', { month: 'long' })}
                    </div>
                  }
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="noPurchases">
          <img
            width="100"
            src="https://cdn-icons.flaticon.com/png/512/1791/premium/1791308.png?token=exp=1636889856~hmac=def70507829848d8ad6386339877d6e4"
            alt="smile"
          />
          <h5>Вы ничего не купили, купите что нибудь</h5>
          <p>Нужно что нибудь купить или выбрать</p>
          <NavLink className="button" to="/">
            back
          </NavLink>
        </div>
      )}
    </>
  );
};
export default Bought;
