import './footer.scss';
import { useRef } from 'react';

import smile from '../../image/smile.jpg';

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
        <img onDragStart={drag} ref={img} id="img" src={smile} alt="smile" width="50px" draggable />
      </div>
      <div onDragOver={allowDrag} ref={right} onDrop={dropRight} className="right"></div>
    </footer>
  );
};

export default Footer;
