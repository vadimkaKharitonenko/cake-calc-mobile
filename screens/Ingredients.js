import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';

import backIcon from '../static/arrow.png';
import searchIcon from '../static/search.png';

import Menu from '../components/Menu';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/index';

class Ingredients extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      ingredients: []
    };
  }

  chooseIngredient = (item) => {
    console.log(item);
    this.props.appActions.addProduct(item);
    this.props.navigation.navigate('Products');
  };

  render() {
    this.ingredients = this.props.IngredientsStore.map(( item, index ) => {
      return <TouchableHighlight key={index} onPress={() => {this.chooseIngredient(item)}}>
        <View style={styles.ingredient}>
          <Text style={styles.ingredient_name}>{item["name"]}</Text>
          <Text style={styles.ingredient_price}>{item["price"]} {item["view"]}</Text>
        </View>
      </TouchableHighlight>
    });

    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => {this.props.navigation.navigate('Products')}}>
          <View style={{display: "flex", flexDirection: 'row', marginLeft: 8, alignItems: 'center'}}>
            <Image source={backIcon} />
            <Text style={{fontFamily: "Roboto", fontSize: 32, color: "#A79681"}}> Выберите что-нибудь </Text>
          </View>
        </TouchableHighlight>
        <View style={{position: "relative"}}>
          <Image source={searchIcon} style={{position: "absolute", top: 27, left: 8, zIndex: 10}} />
          <TextInput style={styles.search} />
        </View>
        <ScrollView style={styles.scrollArea} showsVerticalScrollIndicator={false}>
          {this.ingredients}
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
  search: {
    width: 344,
    height: 36,
    marginTop: 16,
    paddingLeft: 38,
    borderRadius: 8,
    backgroundColor: "#EEE6DC",
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#A79681",
  },
  scrollArea: {
    marginTop: 22,
    maxHeight: 390,
  },
  ingredient: {
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "space-between", 
    width: 344,
    marginBottom: 9,
  },
  ingredient_name: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: "#36271D",
  },
  ingredient_price: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: "#36271D",
  }
})

function mapStateToProps(state) {
  return {
    IngredientsStore: state.IngredientsStore,
    currentRecipeProductsStore: state.currentRecipeProductsStore
  }
}

function mapDispatchToProps(dispatch) {
  return {
      appActions: bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);