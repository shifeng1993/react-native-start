/**
 * 组件名称： StatusBar
 * 功能： 状态栏
 * 作者： haise
 * 邮箱： shifeng199307@gmail.com
 * props： 
 *  backgroundColor: String     非线性渐变下的背景色，
 *  barStyle: Enum              开启状态栏颜色，('default', 'light-content', 'dark-content') ，
 *  translucent: Boolen         开启沉浸状态栏，
 *  hidden: Boolen              是否隐藏状态栏，
 */

import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Platform,
  Dimensions
} from 'react-native';

import utils from '../../utils';

const {height, width} = Dimensions.get('window');
const isIphoneX = utils.isIphoneX();

class Status extends Component {
  static defaultProps = {  
    translucent: false, 
    hidden: false,
    barStyle: 'default'
  } 
  render() {
    const {backgroundColor, barStyle, translucent, hidden} = this.props
    if (translucent) {
      if (Platform.OS === 'ios') {
        return (
          <View style = {{ width: width, height: isIphoneX ? 40 : 20,zIndex:1,position:'absolute',backgroundColor: backgroundColor}}>
            <StatusBar barStyle={barStyle} hidden={hidden}/>
          </View>
        )
      } else if (Platform.OS === 'android') {
        return(
          <View style = {{ width: width, height: StatusBar.currentHeight,zIndex:1,position:'absolute',backgroundColor: backgroundColor}}>
            <StatusBar backgroundColor={'rgba(0, 0, 0, 0.0)'} barStyle={barStyle} hidden={hidden} translucent={true}/>
          </View>
        )
      }
    } else {
      if (Platform.OS === 'ios') {
        return (
          <View style = {{ height: isIphoneX ? 40 : 20,backgroundColor: backgroundColor}}>
            <StatusBar barStyle={barStyle} hidden={hidden}/>
          </View>
        )
      } else if (Platform.OS === 'android') {
        return(
          <View style = {{ height: StatusBar.currentHeight,backgroundColor: backgroundColor}}>
            <StatusBar backgroundColor={'rgba(0, 0, 0, 0.0)'} barStyle={barStyle} hidden={hidden} translucent={true}/>
          </View>
        )
      }
    }
  }
}

export default Status;