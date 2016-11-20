/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//导入外部的组件类
var Main = require('./Component/Main/Main');

export default class ShoppingDemo extends Component {
  render() {
    return (
      <Main />
    );
  }
}



AppRegistry.registerComponent('ShoppingDemo', () => ShoppingDemo);
