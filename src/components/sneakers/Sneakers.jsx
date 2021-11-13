import './Sneakers.scss';
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useEffect, useState, memo } from 'react';
import { addedBasket, removeFromTrash, likedItem, removeLikedItem } from '../../actions/action';

const Sneakers = memo(({ item }) => {
  // console.log('render');
  const { addedBasketArr, likedArr } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [itemSelected, setItemSelected] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // console.log(likedArr);

    if (likedArr.length > 0) {
      likedArr.forEach((el) => {
        if (el.id === item.id) {
          setLiked(true);
        }
      });
    }
  }, [likedArr]);
  useEffect(() => {
    if (addedBasketArr.length > 0) {
      addedBasketArr.forEach((el) => {
        if (el.id === item.id) {
          setItemSelected(true);
        }
      });
    } else {
      setItemSelected(false);
    }
  }, [addedBasketArr.length]);

  function onAddedBasket(item) {
    dispatch(addedBasket(item));
  }
  function onLike(id) {
    liked ? dispatch(removeLikedItem(id)) : dispatch(likedItem(item));
    setLiked(!liked);
  }

  return (
    <div onClick={() => onLike(item.id)} key={item.id} className="sneakers_card">
      {liked && (
        <img
          width="50"
          className="like"
          src="https://cdn-icons.flaticon.com/png/512/4209/premium/4209081.png?token=exp=1636697373~hmac=be44ec65870e09a46061f012d039b644"
          alt="like"
        />
      )}
      <div className="sneakers_img">
        <LazyLoadImage effect="blur" src={item.url} alt="card" width="180" />
      </div>
      <h4>{item.name}</h4>
      <div className="sneakers_card_price">
        <div>
          <p>ЦЕНА:</p>
          <p>{item.price}руб.</p>
        </div>
        {!itemSelected ? (
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
              setItemSelected(false);
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
