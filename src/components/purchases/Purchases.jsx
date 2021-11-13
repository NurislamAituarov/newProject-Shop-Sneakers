import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addedBasket, removeLikedItem } from '../../actions/action';
import './purchases.scss';
import { NavLink } from 'react-router-dom';

const Purchases = () => {
  // console.log('render');
  const likedArr = useSelector((state) => state.likedArr);
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
                {like && (
                  <img
                    onClick={() => dispatch(removeLikedItem(item.id))}
                    width="50"
                    className="like"
                    src="https://cdn-icons.flaticon.com/png/512/4209/premium/4209081.png?token=exp=1636697373~hmac=be44ec65870e09a46061f012d039b644"
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
          <NavLink className="button" to="/">
            back
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Purchases;
