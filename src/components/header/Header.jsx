import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwAAsla-fY3kXd6QPAOpDyJVMF9O7PM10x0o9JyQ9Z9M1FU4o7pu3psMhO8Pv_CuRGdw4&usqp=CAU"
          alt="logo"
        />
        <h2>REACT SNEAKERS</h2>
        <p>Магазин лучших крассовок</p>
      </div>
      <nav>
        <ul>
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4379/4379544.png"
              width="30"
              alt="корзина"
            />
            <span>1222 P</span>
          </li>
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3388/3388803.png"
              width="20"
              alt="сердце"
            />
          </li>
          <li>
            <img
              src="https://cdn-icons.flaticon.com/png/512/1436/premium/1436428.png?token=exp=1636561451~hmac=0e76e51de1e517735afd445d5ced646e"
              alt="contact"
              width="20"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
