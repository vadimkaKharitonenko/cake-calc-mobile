import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image, ScrollView } from 'react-native';

import backIcon from '../static/arrow.png';

import Menu from '../components/Menu';
import Product from '../components/Product';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/index';

class Consumables extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    this.consumables = this.props.currentRecipeConsumablesStore.map(( item, index ) => {
      return <Product key={index} info={item} />
    });

    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={() => {this.props.navigation.navigate('Products')}}>
        <View style={{display: "flex", flexDirection: 'row', marginLeft: 8, alignItems: 'center'}}>
          <Image source={backIcon} />
          <Text style={{fontFamily: "Roboto", fontSize: 32, color: "#A79681"}}> Добавьте расходники </Text>
        </View>
      </TouchableHighlight>
      <ScrollView style={styles.scrollArea} showsVerticalScrollIndicator={false}>
        {this.consumables}
        <View style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableHighlight style={styles.next}
          onPress={() => {this.props.navigation.navigate('Results')}}>
            <Text style={styles.next_text}>Рассчитать</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.add_ingredient}
          onPress={() => {this.props.navigation.navigate('ConsumablesList')}}>
            <Text style={styles.add_ingredient_text}>Добавить расходник</Text>
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
  scrollArea: {
    marginTop: 22,
    maxHeight: 390,
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
})

function mapStateToProps(state) {
  return {
    ConsumablesStore: state.ConsumablesStore,
    currentRecipeConsumablesStore: state.currentRecipeConsumablesStore
  }
}

function mapDispatchToProps(dispatch) {
  return {
      appActions: bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Consumables);