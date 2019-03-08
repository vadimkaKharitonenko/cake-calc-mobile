import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';

import Products from './screens/Products';
import Ingredients from './screens/Ingredients';
import Consumables from './screens/Consumables';
import Results from './screens/Results';
import ConsumablesList from './screens/ConsumablesList';

import configureStore from './store/configureStore';

const store = configureStore();

export default class App extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <Provider store={store}>
        <AppStackNavigator />
      </Provider>
    );
  }
}

const RootStack = createStackNavigator({
  Products: Products,
  Ingredients: Ingredients,
  Results: Results,
  Consumables: Consumables,
  ConsumablesList: ConsumablesList,
})

const AppStackNavigator = createAppContainer(RootStack);