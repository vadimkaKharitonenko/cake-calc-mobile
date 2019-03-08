export const addProduct = (elem) => {
  return {type: 'ADD_PRODUCT', payload: elem}
};

export const removeProduct = (elem) => {
  return {type: 'REMOVE_PRODUCT', payload: elem}
};

export const addConsumables = (elem) => {
  return {type: 'ADD_CONSUMABLES', payload: elem}
};

export const removeConsumables = (elem) => {
  return {type: 'REMOVE_CONSUMABLES', payload: elem}
};

export const plusConsumables = (elem) => {
  return {type: 'PLUS_CONSUMABLES', payload: elem}
};

export const minusConsumables = (elem) => {
  return {type: 'MINUS_CONSUMABLES', payload: elem}
};

export const plusProduct = (elem) => {
  return {type: 'PLUS_PRODUCT', payload: elem}
};

export const minusProduct = (elem) => {
  return {type: 'MINUS_PRODUCT', payload: elem}
};