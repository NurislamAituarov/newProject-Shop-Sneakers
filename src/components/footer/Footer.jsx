import './footer.scss';
import { useRef } from 'react';

const Footer = () => {
  const img = useRef();
  const left = useRef();
  const right = useRef();

  function allowDrag(e) {
    e.preventDefault();
  }

  function drag(e) {
    e.dataTransfer.setData('id', e.target.id);
  }

  function dropLeft(e) {
    let itemId = e.dataTransfer.getData('id');

    e.target.append(document.getElementById(itemId));
    document.querySelector('.App').style.backgroundColor = '';
  }
  function dropRight(e) {
    let itemId = e.dataTransfer.getData('id');

    e.target.append(document.getElementById(itemId));
    document.querySelector('.App').style.backgroundColor = 'rgb(200, 200, 200)';
  }
  return (
    <footer>
      <div ref={left} onDragOver={allowDrag} onDrop={dropLeft} className="left">
        <img
          onDragStart={drag}
          ref={img}
          id="img"
          src="https://cdn-icons.flaticon.com/png/512/2470/premium/2470092.png?token=exp=1637043956~hmac=5bd6e90b3dc71267f59b94e76ec788fd"
          alt="smile"
          width="50px"
          draggable
        />
      </div>
      <div onDragOver={allowDrag} ref={right} onDrop={dropRight} className="right"></div>
    </footer>
  );
};

export default Footer;
