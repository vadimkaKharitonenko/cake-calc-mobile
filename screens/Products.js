import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';

import Menu from '../components/Menu';
import Product from '../components/Product';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/index';

class Products extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    this.products = this.props.currentRecipeProductsStore.map(( item, index ) => {
      return <Product key={index} info={item} />
    })

    return (
      <View style={styles.container}>
        <Text style={styles.title}> Добавьте продукты </Text>
        <ScrollView style={styles.scrollArea} showsVerticalScrollIndicator={false}>
          {this.products}
          <View style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableHighlight style={styles.next}
            onPress={() => {this.props.navigation.navigate('Consumables')}}>
              <Text style={styles.next_text}>Далее</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.add_ingredient}
            onPress={() => {this.props.navigation.navigate('Ingredients')}}>
              <Text style={styles.add_ingredient_text}>Добавить ингридиент</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
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
  title: {
    width: "100%",
    marginBottom: 20,
    textAlign: "left",
    fontFamily: "Roboto",
    fontSize: 32,
    color: "#A79681",
  }, 
  scrollArea: {
    maxHeight: 430,
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
    width: 204,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#D8CCBE"
  },
  add_ingredient_text: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: "#36271D"
  }
});

function mapStateToProps(state) {
  return {
    ProductsStore: state.ProductsStore,
    currentRecipeProductsStore: state.currentRecipeProductsStore
  }
}

function mapDispatchToProps(dispatch) {
  return {
      appActions: bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);