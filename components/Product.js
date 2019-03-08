import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';

import closeIcon from '../static/close.png';
import plusIcon from '../static/plus.png';
import minusIcon from '../static/minus.png';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/index';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  deleteProduct = (item) => {
    this.props.appActions.removeProduct(item);
  }

  render() {
    const {
      info
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={{paddingBottom: 11}}>
          <Text style={styles.product_name}>{info["name"]}</Text>
          <Text style={styles.price_for_point}>{info["price"]}  {info["view"]}</Text>
          <TouchableHighlight style={styles.close} onPress={() => {this.deleteProduct(info)}}>
            <Image source={closeIcon} style={{width: 18, height: 18}}/>
          </TouchableHighlight>
        </View>
        <View style={{display: "flex", flexDirection: "row"}}>
          <View style={styles.count}>
            <View style={{display: "flex", flexDirection: "row", alignItems: "flex-end", marginLeft: 12}}>
              <Text style={{fontFamily: "Roboto", fontSize: 14, color: "#FFF", marginRight: 14}}>Количество</Text>
              <Text style={{fontFamily: "Roboto", fontSize: 12, color: "#D8CCBE"}}>{info["type"]}</Text>
            </View>
            <View style={styles.count_inner}>
              <Image source={minusIcon}/>
              <Text style={styles.count_inner_value}>{info["count"]}</Text>
              <Image source={plusIcon}/>
            </View>
          </View>
          <View style={styles.total}>
            <View style={{display: "flex", flexDirection: "row", alignItems: "flex-end", marginLeft: 12}}>
              <Text style={{fontFamily: "Roboto", fontSize: 14, color: "#FFF", marginRight: 14}}>Сумма</Text>
              <Text style={{fontFamily: "Roboto", fontSize: 12, color: "#BEB1A1"}}>₽</Text>
            </View>
            <Text style={{marginTop: 10, marginLeft: 12, fontFamily: "Roboto", fontSize: 18, color: "#A79681"}}>17,20</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 344,
    height: 123,
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 12,
    borderRadius: 8,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowColor: '#000000',
    elevation: 2,
  },
  header: {
    width: "100%",
    height: 52,
    backgroundColor: "#FFF"
  },
  product_name: {
    marginTop: 3,
    marginLeft: 13,
    fontFamily: "Roboto",
    fontSize: 18,
    color: "#36271D",
  },
  price_for_point: {
    marginLeft: 13,
    fontFamily: "Roboto",
    fontSize: 12,
    color: "#A79681",
  },
  close: {
    position: "absolute",
    top: 1,
    right: 0,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    width: 18,
    height: 18,
    backgroundColor: "#A79681",
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  count: {
    width: 234,
    height: 68,
    backgroundColor: "#BEB1A1",
    borderBottomLeftRadius: 8,
  },
  count_inner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 11,
  },
  count_inner_value: {
    marginLeft: 17,
    marginRight: 17,
    fontFamily: "Roboto",
    fontSize: 18,
    color: "#FFF",
  },
  total: {
    width: 110,
    backgroundColor: "#D8CAB9",
    borderBottomRightRadius: 8,
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);