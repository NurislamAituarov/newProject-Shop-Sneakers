export const addedBasket = (item) => ({ type: 'ADD_BASKET', payload: item });
export const removeFromTrash = (id) => ({ type: 'REMOVE_FROM_TRASH', payload: id });
export const likedItem = (item) => ({ type: 'LIKE_ITEM', payload: item });
export const removeLikedItem = (id) => ({ type: 'REMOVE_LIKED_ITEM', payload: id });
