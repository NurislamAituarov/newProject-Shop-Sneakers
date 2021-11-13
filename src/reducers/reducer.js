const initialState = {
  arr: [
    {
      name: 'Мужские Кроссовки Nike Blazer Mid Suede',
      url: 'https://m.media-amazon.com/images/I/41UxZja9R0L.jpg',
      price: 12900,
      id: 1,
    },
    {
      name: 'Мужские Кроссовки Nike Air Max 270',
      url: 'https://klike.net/uploads/posts/2020-03/1583139128_9.jpg',
      price: 13560,
      id: 2,
    },
    {
      name: 'Мужские Кроссовки Nike Blazer Mid Suede',
      url: 'data:image/jpeg;base64,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KUVX3QBLkWQY1HBqvjMkCViRYEREAREQCL4vhS3s6isVyMcwGzowsVPrlN/uzEBBvY/y/wBpOOgIIOxFprmKXK5R9D8J2zeI6+XKQweyn98p4a+2vlz8zrpLKq3Jz57n5zy4b7WnSw/pBJce5G/r/IDcy0UvprffQ3bzynRfWeLMd2N+o/rPDgAa66W6yLFFKoA3y+OuW3m+3oJYaoLam4vsVDJ817x854dxa17crTGeoNSx/PrKtkpGemIG4v4Zen4W2l3OdLD+/S1zIapxihT0eogPQsL/AC3lMLx1KrhKKlyediAPU6/lIpsk2jhhPtEufi/kZs0i+F8OyAM5zMRppYLfew6+P6SUl4qkVZWIiWIEREAREQCkREAREQCsREAREQBERAEREAREQBLdWkrAq6hgdwQCPkZciAa3jOzCnvYeq9I9Acy/wttIHHcI4rTuabpUH4Rf5aToMQTZxzGcQ4slwyqP3D/WQmJ4jxNtDUYeSIP5Tvb0lPvAHzExqnC6Db01+UUhZwHJjG96tU137xH6T2vCKj++9RvNmP6zuh4DhvsCe04PQGyCToWcd4b2VJIsh+U6N2a7OClZ2Fps9PDIvuqB6S7FiysREggREQBERAESkrAKREQBERAKxEQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREA/9k=',
      price: 9562,
      id: 3,
    },
    {
      name: 'Кроссовки Puma X Aka Boku Future Rider',
      url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUTEhMWFhUSGBgYGBUVGBUVGBYVFRgXFxUXFRgYHSggGBolHRcYITEiJSkrLi4uFx8zODMuNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAwIEBQYHAQj/xABEEAABAgMFBAcGAggEBwAAAAABAAIDESEEEjFBUQVhcYEGByKRobHwEzJCcsHRUuEUM0NTYoKS8RcjssIVFlRzk6LD/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO4IiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiBJERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBF4StV2n1i7LgOumPfIx9k0xAP5h2fFBtaLFbB6RWS2NLrPFD5Ytq1zfmaajisqgIiICIorTaGQ2OfEcGsYJuc4yAAzJKCVartzrB2dZX+zfFL35thAPu/MZgA7pz3LnnT7rDiWm9BsjzDg1BcAQ+LiMcWs3Y64yXKY8COBeuktOBFUH1nsXbdmtbPaWeIHjOVHNOjmmoKyC+QtmbZtFndNj3sJHvMc5hI0mCKLofQbrUtDIzYdpiOjQXYl8jEYNQ4CbpaGdAg70ixkfpFYmMD32mCGOkA4vbKuGavrNaWRGh8N7XtODmkOB4EIJUREBERAREQEREBERAREQEREBERAREQEREBR2m0Mhsc97g1jAXOcaAAVJKkWi9cltdD2fdBkIsVrHVl2QHPIw/hCDnPT/rBj2wuhwr0OzYXRR0QaxCMv4cNZrnMa2rIl0jSYrKmGJGYph4qzjQGxBIyD9QJf1BBLsfpBGs8RsWE9zHtwc094OoOhoV3boZ1qWa0gMtRbBi/j/Zv3z+A7jTevmxwLSRmKKaz2stQfaEGMx4mxwcDm0gjvCrXyBZt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',
      price: 8620,
      id: 4,
    },
    {
      name: 'Мужские Кроссовки Under Armour Curry 8',
      url: 'https://s.pfst.net/2010.01/35475787c6bfae6faf4e93fe8a3353edeefd4_b.jpg',
      price: 15648,
      id: 5,
    },
    {
      name: 'Мужские Кроссовки Nike Kyrie 7',
      url: 'https://image.freepik.com/free-photo/summer-pink-women-s-sneakers-on-a-white-space_140241-320.jpg',
      price: 11658,
      id: 6,
    },
    {
      name: 'Мужские Кроссовки Jordan Air Jordan 11',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZGug4ajEEVNt5ad-dtFhRWycP8WpQVUSzBQ&usqp=CAU',
      price: 10756,
      id: 7,
    },
    {
      name: 'Мужские Кроссовки Nike LeBron XVIII',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-vhGsFwoP_cN4unLdb-QQwGkLAnmr_Znuw&usqp=CAU',
      price: 16900,
      id: 8,
    },
    {
      name: 'Мужские Кроссовки Nike Lebron XVIII Low',
      url: 'https://cdn.kanobu.ru/r/356527845950a379ace37c3332109694/1040x-/u.kanobu.ru/editor/images/92/feac4d7d-c8f9-437e-b36b-8adde88e8c8a.jpeg',
      price: 13990,
      id: 9,
    },
    {
      name: 'Мужские Кроссовки Nike Blazer Mid Suede',
      url: 'https://m.buro247.ru/local/images/buro/adidas_superstar_.jpg',
      price: 8490,
      id: 10,
    },
    {
      name: 'Кроссовки Puma X Aka Boku Future Rider',
      url: 'https://image.freepik.com/free-photo/yellow-sneakers-on-white-background_1339-16512.jpg',
      price: 7569,
      id: 11,
    },
    {
      name: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
      url: 'https://image.freepik.com/free-photo/sneakers-in-white-background_322022-334.jpg',
      price: 11569,
      id: 12,
    },
  ],
  sliderCard: [
    {
      url: 'https://assets.turbologo.ru/blog/ru/2021/06/03041303/nike-logo-1978.png',
      id: 1,
    },
    {
      url: 'https://postium.ru/wp-content/uploads/2019/04/2-Adidas.png',
      id: 2,
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0i_ZpkavbVI-uL6cr_MdcOksWHMpZD1zlg4YEbIVt5NV14ept8ULIwngr2V03dja7lc&usqp=CAU',
      id: 3,
    },
  ],
  addedBasketArr: [],
  likedArr: [],
  priceAll: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BASKET':
      state.addedBasketArr.forEach((item) => {
        if (item.id === action.payload.id) {
        }
      });
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
    case 'LIKE_ITEM':
      return {
        ...state,
        likedArr: [...state.likedArr, action.payload],
      };
    case 'REMOVE_LIKED_ITEM':
      return {
        ...state,
        likedArr: state.likedArr.filter((item) => item.id !== action.payload),
      };
    case 'SEARCH_VALUE':
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
