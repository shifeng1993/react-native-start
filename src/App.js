import React, {Component} from "react";
import {Provider, connect} from "react-redux";
import {View, BackHandler, Platform, Dimensions} from "react-native";
import {NavigationActions, addNavigationHelpers} from "react-navigation";
import {
  createNavigationPropConstructor,       // handles #1 above
  createNavigationReducer,               // handles #2 above
  initializeListeners,                   // handles #4 above
} from 'react-navigation-redux-helpers';
import Orientation from 'react-native-orientation';
import getStore from "./store";
import {StatusBar, Navigator, Toast} from './components';
import ThemeStyle from './common/ThemeStyle';

// 工具部分
import http from './utils/http';
import storage from './utils/storage';
import utils from './utils'

// 引入路由
import AppNavigator from './router';

// 全局变量
global.storage = storage;
global.http = http;
global.newWidth = utils.getWidth();  // 获取一个定量宽度，不管设备怎么旋转，

// 定义navigation 用于后面render函数时候完成后导出
let navigation;

// 以下是集成redux
const navigationPropConstructor = createNavigationPropConstructor("root");
const navReducer = createNavigationReducer(AppNavigator);

class App extends Component {
  componentWillMount() {
    // 禁止横屏
    // Orientation.lockToPortrait();
  }
  /*处理安卓硬件返回按键 开始*/
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    initializeListeners("root", this.props.nav);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  exit = 0;
  onBackPress = () => {
    const {dispatch, nav} = this.props;
    const currentScreen = utils.getCurrentRouteName(nav)
    // 只有在主页面的第一个页面或者是登录页面 才会退出
    if (currentScreen === 'Home' || currentScreen === 'Login' ) {
      this.exit += 1;
      if (this.exit === 1){
        toastShow('再点一次退出')
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
    const {dispatch, nav} = this.props;
    navigation = navigationPropConstructor(dispatch, nav);
    global.navigation = navigation
    global.ThemeStyle = ThemeStyle[this.props.config.theme]   // 添加主题全局对象   需要的地方调用 例：ThemeStyle.pageColor
    // 默认底部toastshow
    global.toastShow = (message) => {
      this.refs.Toast.show(message, 2000);
    }
    return (
    <View style={{flex:1}}>
      <AppNavigator navigation={navigation}/>
        <Toast
             ref='Toast'
             style={{backgroundColor:'#38506d',borderRadius:5}}
             position='bottom'
             positionValue={newWidth/3}
             fadeInDuration={600}
             fadeOutDuration={600}
             opacity={0.95}
             textStyle={{color:'#c9d0d7',textAlign:'center',fontSize:16}}
        />
    </View>
    );
  }
}

// 根组件连接状态
const AppWithNavigationState = connect((state) => ({nav: state.nav, config: state.config}))(App);

// 输出渲染
const Root = () => {
  return (
    <Provider store={getStore(navReducer)}>
      <AppWithNavigationState/>
    </Provider>
  );
}

export {Root, navigation}