import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';

import calcIcon from '../static/calc.png';
import productsIcon from '../static/products.png';
import menuIcon from '../static/menu.png';
import someIcon from '../static/some.png';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menu_item}>
          <TouchableHighlight>
            <View style={styles.menu_item}>
              <Image 
                style={{width: 24, height: 24}}
                source={calcIcon}
              />
              <Text style={styles.menu_text}>Калькулятор</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.menu_item}>
          <TouchableHighlight>
            <View style={styles.menu_item}>
              <Image 
                style={{width: 24, height: 24}}
                source={productsIcon}
              />
              <Text style={styles.menu_text}>Продукты</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.menu_item}>
          <TouchableHighlight>
            <View style={styles.menu_item}>
              <Image 
                style={{width: 24, height: 24}}
                source={someIcon}
              />
              <Text style={styles.menu_text}>Расходники</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.menu_item}>
          <TouchableHighlight>
            <View style={styles.menu_item}>
              <Image 
                style={{width: 24, height: 24}}
                source={menuIcon}
              />
              <Text style={styles.menu_text}>Меню</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 56,
    paddingLeft: 19,
    paddingRight: 19,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowColor: '#000000',
    elevation: 4,
    backgroundColor: "#FFF",
  },
  menu_item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    margin: 0,
    padding: 0,
  },
  menu_text: {
    fontFamily: 'Roboto',
    fontSize: 10,
    color: '#A79681',
  }
})