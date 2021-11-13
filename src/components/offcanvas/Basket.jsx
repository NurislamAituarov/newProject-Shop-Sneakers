import './basket.scss';

import { useSelector, useDispatch } from 'react-redux';
import { removeFromTrash } from '../../actions/action';

const Basket = ({ basketRef, content, setBasket }) => {
  const addedBasketItem = useSelector((state) => state.addedBasketArr);
  const dispatch = useDispatch();
  // console.log(addedBasketItem);

  let price = addedBasketItem.reduce((acu, el) => {
    return el.price + acu;
  }, 0);

  return (
    <div ref={basketRef} className="basket">
      <div ref={content} className="div">
        <h2>Корзина</h2>
        {addedBasketItem.length !== 0 ? (
          addedBasketItem.map((item) => {
            return (
              <div key={item.id} className="item_card">
                <img width="120" src={item.url} alt="card" />
                <div>
                  <h5>{item.name}</h5>
                  <p>{item.price} руб.</p>
                </div>
                <button onClick={() => dispatch(removeFromTrash(item.id))}>x</button>
              </div>
            );
          })
        ) : (
          <div className="empty_cart">
            <img
              width="120"
              src="https://cdn-icons-png.flaticon.com/512/60/60992.png"
              alt="basket"
            />
            <h2>Корзина пустая</h2>
            <p className="text">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <span
              onClick={() => {
                setBasket(false);
                document.querySelector('body').style.overflow = '';
              }}>
              <img
                width="30"
                src="https://cdn-icons.flaticon.com/png/512/2040/premium/2040518.png?token=exp=1636649878~hmac=45e799f33092d043549a4089cf979df2"
                alt="back"></img>{' '}
              <p>Вернуться назад</p>
            </span>
          </div>
        )}
        {addedBasketItem.length !== 0 ? (
          <div className="checkout">
            <p>Итоги: .............................{price} руб.</p>
            <p>Налог 5%: ......................{(price * 5) / 100} руб.</p>
            <span>
              Оформить заказ{' '}
              <img
                src="https://cdn-icons-png.flaticon.com/512/1053/1053190.png"
                alt="right"
                width="50"
              />
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Basket;
