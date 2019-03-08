import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import Menu from '../components/Menu';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/index';

class Results extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {
      currentRecipeConsumablesStore,
      currentRecipeProductsStore
    } = this.props;

    const totalConsumablesPrice = currentRecipeConsumablesStore.reduce((acc, currentValue) => (acc + (currentValue.price * currentValue.count)), 0);
    const totalProductsPrice = currentRecipeProductsStore.reduce((acc, currentValue) => (acc + (currentValue.price * currentValue.count)), 0);
    const totalPrice = totalConsumablesPrice + totalProductsPrice;

    return (
      <View style={styles.container}>
        <Text style={{fontFamily: "Roboto", fontSize: 32, color: "#A79681", width: 344, textAlign: "left", marginBottom: 19}}> Результат </Text>
        <View style={{width: 326}}>
          <Text style={{fontFamily: "Roboto", fontSize: 18, color: "#36271D", marginBottom: 10}}>Расходы:</Text>
          <View style={styles.ingredient}>
            <Text style={styles.ingredient_name}>На 1 кг веса торта</Text>
            <Text style={styles.ingredient_price}>{totalProductsPrice} ₽</Text>
          </View>
          <View style={styles.ingredient} style={{marginBottom: 22}}>
            <Text style={styles.ingredient_name}>Расходные материалы</Text>
            <Text style={styles.ingredient_price}>{totalConsumablesPrice} ₽</Text>
          </View>
          <Text style={{fontFamily: "Roboto", fontSize: 18, color: "#36271D", marginBottom: 10}}>Итог:</Text>
          <View style={styles.ingredient}>
            <Text style={styles.ingredient_name}>Предполагаемая масса</Text>
            <Text style={styles.ingredient_price}>~2,5 кг</Text>
          </View>
          <View style={styles.ingredient}>
            <Text style={styles.ingredient_name}>Цена изготовления</Text>
            <Text style={styles.ingredient_price}>{totalPrice} ₽</Text>
          </View>
          <Text style={{fontFamily: "Roboto", fontSize: 14, color: "#A79681", marginTop: 32, marginBottom: 50}}>
            Цена изготовления без учета цены времени и прочих наценок, формирующих конечную цену для покупателя.
          </Text>
          <View style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', width: 326}}>
            <TouchableHighlight style={styles.next}
            onPress={() => {this.props.navigation.navigate('Products')}}>
              <Text style={styles.next_text}>Изменить состав</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.add_ingredient}
            onPress={() => {console.log('add')}}>
              <Text style={styles.add_ingredient_text}>Сохранить рецепт</Text>
            </TouchableHighlight>
          </View>
        </View>
        <Menu />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginTop: 40,
  },
  ingredient: {
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "space-between", 
    width: 326,
    marginBottom: 9,
  },
  ingredient_name: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "#36271D",
  },
  ingredient_price: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "#36271D",
  },
  next: {
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    width: 132,
    height: 48,
    backgroundColor: "#FFF",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#36271D",
  },
  next_text: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "#36271D",
  },
  add_ingredient: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 184,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#D8CCBE"
  },
  add_ingredient_text: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "#36271D"
  }
})

function mapStateToProps(state) {
  return {
    currentRecipeProductsStore: state.currentRecipeProductsStore,
    currentRecipeConsumablesStore: state.currentRecipeConsumablesStore
  }
}

function mapDispatchToProps(dispatch) {
  return {
      appActions: bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);