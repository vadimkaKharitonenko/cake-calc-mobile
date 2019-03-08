import * as R from 'ramda';

export default function currentRecipeProductsStore(state = [], action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [
        ...state,
        action.payload
      ]
    case "REMOVE_PRODUCT":
      return state.filter(el => el.name !== action.payload.name)
    case "PLUS_PRODUCT": {
        const FIND_INDEX = state.findIndex(el => el.name === action.payload);
        if (FIND_INDEX > -1) {
          const NEW_PRODUCT = {...state[FIND_INDEX], count: state[FIND_INDEX].count + 1};
          return R.update(FIND_INDEX, NEW_PRODUCT, state);
        }
      }
    case "MINUS_PRODUCT": {
      const FIND_INDEX = state.findIndex(el => el.name === action.payload);
      if (FIND_INDEX > -1) {
        const NEW_PRODUCT = {...state[FIND_INDEX], count: state[FIND_INDEX].count - 1};
        return R.update(FIND_INDEX, NEW_PRODUCT, state);
      }
    }
  }
  return state;
};