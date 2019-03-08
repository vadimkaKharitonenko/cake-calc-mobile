const currentRecipeProductsState = [
  
];

export default function currentRecipeProductsStore(state = currentRecipeProductsState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [
        ...state,
        action.payload
      ]
    case "REMOVE_PRODUCT":
      return state.filter(el => el.name !== action.payload.name)
  }
  return state;
};