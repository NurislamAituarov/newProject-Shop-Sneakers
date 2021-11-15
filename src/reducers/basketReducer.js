const initialState = {
  addedBasketArr: [],
  priceAll: 0,
  bought: '',
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BASKET':
      return {
        ...state,
        addedBasketArr: [...state.addedBasketArr, action.payload],
        priceAll: state.addedBasketArr.reduce((acu, el) => {
          return el.price + acu;
        }, 0),
      };
    case 'REMOVE_FROM_TRASH':
      return {
        ...state,
        addedBasketArr: state.addedBasketArr.filter((item) => item.id !== action.payload),
      };
    case 'REMOVE_FROM_TRASH_ALL':
      return {
        ...state,
        addedBasketArr: [],
      };
    case 'BOUGHT':
      return {
        ...state,
        bought: !state.bought
          ? [...state.addedBasketArr]
          : [...state.bought, ...state.addedBasketArr],
      };
    case 'BOUGHT_REMOVE':
      return {
        ...state,
        bought: '',
      };
    default:
      return state;
  }
};

export default basketReducer;
