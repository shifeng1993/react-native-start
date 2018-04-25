import React, {Component} from 'react';
import {View, Dimensions, Platform, Image, Text} from 'react-native';
import {DrawerNavigator, TabNavigator} from 'react-navigation';
import {TabBarComponent} from '../pages';
import utils from '../utils'; // 识别iphonex
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// 引入页面容器
import {My, Discovery, Friend} from '../pages';

// 设置常量
const {height, width} = Dimensions.get('window');
const isIphoneX = utils.isIphoneX()

/* ****************************** tabbar ****************************** */

const tabbar = TabNavigator({
  My: {
    screen: My,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor, focused}) => <Icon name="user" size={24} color={tintColor}/>,
      tabBarOnPress: ((e) => {
        e.jumpToIndex(e.scene.index);
      })
    }
  },
  Discovery: {
    screen: Discovery,
    navigationOptions: {
      tabBarLabel: '发现',
      tabBarIcon: ({tintColor, focused}) => <Icon name="music" size={24} color={tintColor}/>,
      tabBarOnPress: ((e) => {
        e.jumpToIndex(e.scene.index);
      })
    }
  },
  Friend: {
    screen: Friend,
    navigationOptions: {
      tabBarLabel: '朋友',
      tabBarIcon: ({tintColor, focused}) => <Icon name="users" size={24} color={tintColor}/>,
      tabBarOnPress: ((e) => {
        e.jumpToIndex(e.scene.index);
      })
    }
  }
}, {
  tabBarPosition: 'top',
  swipeEnabled: true,
  animationEnabled: true,
  // 懒加载
  lazy: true,
  backBehavior: 'initialRoute',
  tabBarComponent: props => <TabBarComponent {...props}/>,
  tabBarOptions: {
    // label和icon的背景色 活跃状态下（选中） ios
    activeBackgroundColor: '#rgba(0,0,0,0)',
    // label和icon的前景色 活跃状态下（选中）
    activeTintColor: '#fff',
    // label和icon的背景色 不活跃状态下（未选中） ios
    inactiveBackgroundColor: 'rgba(0,0,0,0)',
    // label和icon的前景色 不活跃状态下(未选中)
    inactiveTintColor: '#e58983'
  }
});

/* ****************************** 抽屉导航 ****************************** */
const Main = DrawerNavigator({
  main: {
    screen: tabbar,
    navigationOptions: {
      // drawerLockMode: 'locked-closed',
      drawerWidth: width * 0.86
    }
  }
}, {
  contentComponent: props => (
    <Text>左侧抽屉导航</Text>
  )
})

export default Main;