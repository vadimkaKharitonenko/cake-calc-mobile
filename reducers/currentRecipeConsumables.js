import * as R from 'ramda';

export default function currentRecipeConsumablesStore(state = [], action) {
  switch (action.type) {
    case "ADD_CONSUMABLES":
      return [
        ...state,
        action.payload
      ]
    case "REMOVE_CONSUMABLES":
      return state.filter(el => el.name !== action.payload.name)
    case "PLUS_CONSUMABLES": {
        const FIND_INDEX = state.findIndex(el => el.name === action.payload);
        if (FIND_INDEX > -1) {
          const NEW_CONSUMABLES = {...state[FIND_INDEX], count: state[FIND_INDEX].count + 1};
          return R.update(FIND_INDEX, NEW_CONSUMABLES, state);
        }
      }
    case "MINUS_CONSUMABLES": {
      const FIND_INDEX = state.findIndex(el => el.name === action.payload);
      if (FIND_INDEX > -1) {
        const NEW_CONSUMABLES = {...state[FIND_INDEX], count: state[FIND_INDEX].count - 1};
        return R.update(FIND_INDEX, NEW_CONSUMABLES, state);
      }
    }
  }
  return state;
};