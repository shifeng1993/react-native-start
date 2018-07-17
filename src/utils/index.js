import React, {Component} from 'react';
import {Dimensions, Platform} from 'react-native';

export default class utils {
  static isIphoneX() {
    const {height, width} = Dimensions.get('window');
    let iphoneXAspect = parseFloat((height / width).toString().substring(0, 5))
    if (Platform.OS === 'ios' && iphoneXAspect === 2.165) {
      return true
    } else {
      return false
    }
  }
  static getWidth() {
    const {height, width} = Dimensions.get('window');
    const newWidth = (width < height) ? width : height;
    return newWidth
  }
  // 获取当前屏幕名称
  static getCurrentRouteName(navigationState) {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return utils.getCurrentRouteName(route);
    }
    return route.routeName;
  }
}