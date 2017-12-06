export const addItem = (text) => ({
  type: 'ADD_ITEM',
  text
});

export const deleteItemAtIndex = (index) => ({
  type: 'DELETE_ITEM_AT_INDEX',
  index
});
