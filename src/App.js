import React, {Component} from "react";
import {Provider, connect} from "react-redux";
import {BackHandler, ToastAndroid} from "react-native";
import { NavigationActions } from 'react-navigation';
import {reduxifyNavigator, createNavigationReducer} from 'react-navigation-redux-helpers';
import getStore from "./store";
import ThemeStyle from './common/ThemeStyle';

// 工具部分
import http from './utils/http';
import storage from './utils/storage';
import utils from './utils'
import NavigationService from './utils/NavigationService';

// 引入路由
import RootNavigator from './router';

// 全局变量
global.storage = storage;
global.http = http;
global.newWidth = utils.getWidth(); // 获取一个定量宽度，不管设备怎么旋转，

class App extends Component {
  static router = RootNavigator.router;

  /*处理安卓硬件返回按键 开始*/
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  exit = 0;
  onBackPress = () => {
    const {state, dispatch} = this.props.navigation;
    const currentScreen = utils.getCurrentRouteName(state);
    // 只有在主页面的第一个页面或者是登录页面 才会退出
    if (currentScreen === 'My' || currentScreen === 'Login' ) {
      this.exit += 1;
      if (this.exit === 1){
        ToastAndroid.show('再点一次退出', ToastAndroid.SHORT);
        setTimeout(() => {
          this.exit = 0;
        }, 2000); 
      } else if (this.exit >= 2) {
        return false
      }
    } 
    dispatch(NavigationActions.back());
    return true;
  };
  /*处理安卓硬件返回按键 结束*/

  render() {
    console.log(this.props)
    const {navigation, config} = this.props;
    global.ThemeStyle = ThemeStyle[config.theme];
    return <RootNavigator navigation={navigation} ref={ref => NavigationService.setRootNavigator(ref)} />;
  }
}

const navReducer = createNavigationReducer(RootNavigator);

const AppWithNavigationState = reduxifyNavigator(App, 'root');

const mapStateToProps = state => ({state: state.nav, config: state.config});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

// 输出渲染
class Root extends Component {
  render() {
    return (
      <Provider store={getStore(navReducer)}>
        <AppNavigator/>
      </Provider>
    );
  }
}

export {Root}