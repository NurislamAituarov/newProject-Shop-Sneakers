import Sneakers from '../sneakers/Sneakers';
import './Section.scss';

const Section = () => {
  return (
    <div className="section">
      <div className="header_section">
        <h2>Все кросовки</h2>
        <div className="search">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149309.png"
            width="20"
            alt="search"
          />
          <input type="text" placeholder="Поиск" />
        </div>
      </div>
      <Sneakers />
    </div>
  );
};

export default Section;
