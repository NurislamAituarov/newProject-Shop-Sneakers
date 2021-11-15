export const addedBasket = (item) => ({ type: 'ADD_BASKET', payload: item });
export const removeFromTrash = (id) => ({ type: 'REMOVE_FROM_TRASH', payload: id });
export const removeFromTrashAll = () => ({ type: 'REMOVE_FROM_TRASH_ALL' });
export const likedItem = (item) => ({ type: 'LIKE_ITEM', payload: item });
export const removeLikedItem = (id) => ({ type: 'REMOVE_LIKED_ITEM', payload: id });
export const searchValueItem = (value) => ({ type: 'SEARCH_VALUE', payload: value });
export const boughtSneakers = () => ({ type: 'BOUGHT' });
export const boughtSneakersRemove = () => ({ type: 'BOUGHT_REMOVE' });
