export const addProduct = (elem) => {
  return {type: 'ADD_PRODUCT', payload: elem}
};

export const removeProduct = (elem) => {
  return {type: 'REMOVE_PRODUCT', payload: elem}
};