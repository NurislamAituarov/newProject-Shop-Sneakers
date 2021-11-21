import './Sneakers.scss';
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useState, memo } from 'react';
import { addedBasket, removeFromTrash, likedItem, removeLikedItem } from '../../actions/action';

import image from '../../image/heart.png';

const Sneakers = memo(({ item }) => {
  const { addedBasketArr } = useSelector((state) => state.basketReducer);
  const { likedArr } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);

  // console.log('render');
  function onAddedBasket(item) {
    dispatch(addedBasket(item));
  }
  function onLike(id) {
    liked ? dispatch(removeLikedItem(id)) : dispatch(likedItem(item));
    setLiked(!liked);
  }

  return (
    <div onClick={() => onLike(item.id)} key={item.id} className="sneakers_card">
      <div className="heart">
        {likedArr.filter((el) => el.id === item.id).length !== 0 ? (
          <img width="50" className="like" src={image} alt="like" />
        ) : (
          <img
            style={{ opacity: 0.3 }}
            width="35"
            src="https://cdn-icons-png.flaticon.com/512/14/14815.png"
            alt="like"
          />
        )}
      </div>
      <div className="sneakers_img">
        <LazyLoadImage effect="blur" src={item.url} alt="card" width="180" />
      </div>
      <h4>{item.name}</h4>
      <div className="sneakers_card_price">
        <div>
          <p>ЦЕНА:</p>
          <p>{item.price}руб.</p>
        </div>
        {addedBasketArr.filter((el) => el.id === item.id).length === 0 ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddedBasket(item);
            }}>
            +
          </button>
        ) : (
          <img
            onClick={(e) => {
              e.stopPropagation();
              dispatch(removeFromTrash(item.id));
            }}
            src="https://as2.ftcdn.net/v2/jpg/03/03/72/13/500_F_303721320_IE2JJEW9JLhuIzzoIsBDLuZ3silkP3zX.jpg"
            alt="selected"
            width="35"
          />
        )}
      </div>
    </div>
  );
});

export default Sneakers;
