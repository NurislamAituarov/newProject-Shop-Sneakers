import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addedBasket, removeLikedItem } from '../../actions/action';
import './purchases.scss';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import image from '../../image/heart.png';

const Purchases = () => {
  // console.log('render');
  const likedArr = useSelector((state) => state.reducer.likedArr);
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);

  useEffect(() => {
    if (likedArr) {
      setLike(true);
    }
  }, [likedArr]);
  // console.log(likedArr);
  return (
    <>
      <Helmet>
        <meta name="description" content="Web site created using create-react-app" />
        <title>Sneakers Selected</title>
      </Helmet>
      <div className="liked">
        <NavLink to="/newProject-Shop-Sneakers" className="back">
          <img width="15" src="https://cdn-icons-png.flaticon.com/512/54/54782.png" alt="left" />
        </NavLink>
        <h1>Выбранные </h1>
      </div>
      {likedArr.length !== 0 ? (
        <div className="wrapper_like">
          {likedArr.map((item) => {
            return (
              <div key={item.id} className="sneakers_card">
                {like && (
                  <img
                    onClick={() => dispatch(removeLikedItem(item.id))}
                    width="50"
                    className="like"
                    src={image}
                    alt="like"
                  />
                )}
                <img width="180" height="180" src={item.url} alt="like" />
                <h5>{item.name}</h5>
                <div className="card_price">
                  <div>
                    <p>Цена</p>
                    <p>{item.price}</p>
                  </div>
                  <button onClick={() => dispatch(addedBasket(item))}>+</button>
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
          <NavLink className="button" to="/newProject-Shop-Sneakers">
            back
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Purchases;
