import './Slider.scss';
import { useState, useRef, useEffect } from 'react';

const Slider = () => {
  const [arr, setArr] = useState([
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMuNtb7DnVYgeuU2eHmb63LkHuEpOIek6sgQ&usqp=CAU',
      id: 1,
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Uh7xOws9YrcinvXfm10BSM2SA_gOfRxr3A&usqp=CAU',
      id: 2,
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhxoyInD3yuBrpEKH4QkeG0Bgwge7muWOwA&usqp=CAU',
      id: 3,
    },
  ]);
  const blockWrapper = useRef();
  let transform = 0;
  useEffect(() => {
    // console.log(blockWrapper);
  });

  const sliderFurther = () => {
    if (transform >= 66) {
      transform = 0;
      blockWrapper.current.style.transform = `translateX(-${transform}%)`;
    } else {
      transform += 33;
      blockWrapper.current.style.transform = `translateX(-${transform}%)`;
    }
  };

  return (
    <div className="slider_wrapper">
      <div className="slider_left">
        <div className="brend">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png"
            width="50"
            alt="rave"
          />
          <div className="hr"></div>
          <img
            src="https://avatanplus.com/files/resources/original/575eb8b4d0c461554a018277.png"
            width="50"
            alt="disney"
          />
        </div>
        <h1>
          <p>Stan Smith</p>, Forever!
        </h1>
        <button>Купить</button>
      </div>
      <div className="slider_right">
        <div ref={blockWrapper} className="block_wrapper">
          {arr.map((item) => {
            return (
              <div key={item.id} className="block_item">
                <img src={item.url} alt="slide"></img>
              </div>
            );
          })}
        </div>
        <div onClick={sliderFurther} className="block_right">
          {' '}
          <img src="https://cdn-icons-png.flaticon.com/512/709/709586.png" alt="right" width="20" />
        </div>
      </div>
    </div>
  );
};
export default Slider;
