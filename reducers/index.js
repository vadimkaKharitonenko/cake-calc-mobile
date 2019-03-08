import { combineReducers } from 'redux';

import ProductsStore from './products';
import IngredientsStore from './ingredients';
import ConsumablesStore from './consumables';
import currentRecipeProductsStore from './currentRecipeProducts';
import currentRecipeConsumablesStore from './currentRecipeConsumables';

export default combineReducers({
  ProductsStore,
  IngredientsStore,
  ConsumablesStore,
  currentRecipeProductsStore,
  currentRecipeConsumablesStore
})