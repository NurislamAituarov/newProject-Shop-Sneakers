import './Header.scss';
import { useState, useEffect } from 'react';
import Basket from '../offcanvas/Basket';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

const Header = () => {
  // console.log('render');
  const { addedBasketArr, likedArr } = useSelector((state) => state);
  const [basket, setBasket] = useState(false);
  const basketRef = useRef();
  const content = useRef();
  const transformLike = useRef();

  let price = addedBasketArr.reduce((acu, el) => {
    return el.price + acu;
  }, 0);
  useEffect(() => {
    if (basket) {
      content.current.style.transform = 'translateX(0)';
    }
    function basketHidden(e) {
      if (e.target === basketRef.current) {
        document.querySelector('body').style.overflow = '';
        setBasket(!basket);
      }
    }
    document.addEventListener('click', basketHidden);
    return () => {
      document.removeEventListener('click', basketHidden);
    };
  }, [basket]);
  // console.log(price);

  function transform() {
    transformLike.current.style.transform = 'translateX(20px) scale(.7)';
    setTimeout(() => {
      transformLike.current.style.transform = 'translateX(0px)';
    }, 600);
  }
  return (
    <>
      <header>
        <NavLink to="/" onMouseEnter={transform} className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwAAsla-fY3kXd6QPAOpDyJVMF9O7PM10x0o9JyQ9Z9M1FU4o7pu3psMhO8Pv_CuRGdw4&usqp=CAU"
            alt="logo"
          />
          <h2>REACT SNEAKERS</h2>
          <p>Магазин лучших крассовок</p>
        </NavLink>
        <nav>
          <ul>
            <li
              onClick={() => {
                setBasket(!basket);
                document.querySelector('body').style.overflow = 'hidden';
              }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/4379/4379544.png"
                width="30"
                alt="корзина"
              />
              <span>{price} P</span>
            </li>
            <NavLink ref={transformLike} to="/Purchases">
              {likedArr.length === 0 ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3388/3388803.png"
                  width="20"
                  alt="сердце"
                />
              ) : (
                <img
                  width="30"
                  src="https://cdn-icons.flaticon.com/png/512/4209/premium/4209081.png?token=exp=1636697373~hmac=be44ec65870e09a46061f012d039b644"
                  alt="like"
                />
              )}
            </NavLink>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/46/46646.png"
                alt="contact"
                width="30"
              />
            </li>
          </ul>
        </nav>
      </header>

      {basket ? <Basket basketRef={basketRef} content={content} setBasket={setBasket} /> : null}
    </>
  );
};

export default Header;
