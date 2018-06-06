import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {StatusBar, Navigator} from '../../components'

// 设置常量
const {height, width} = Dimensions.get('window');

export default class TabBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderItem = (route, index) => {
    const {navigation, jumpTo} = this.props;
    const focused = index === navigation.state.index;
    const color = focused
      ? this.props.activeTintColor
      : this.props.inactiveTintColor;
    let TabScene = {
      focused: focused,
      route: route,
      tintColor: color
    };
    return (
      <TouchableOpacity
        key={route.key}
        activeOpacity={0.8}
        style={[
        styles.tabItem, {
          padding: newWidth / 14
        }
      ]}
        onPress={() => focused
        ? null
        : jumpTo(navigation.state.routes[index].key)}>
        <View style={[styles.tabItem]}>
          {this
            .props
            .renderIcon(TabScene)}
          {/* <Text
            style={{
            ...styles.tabText,
            marginTop: 10,
            color
          }}>{this.props.getLabel(TabScene)}</Text> */}
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor={ThemeStyle.important_1}
          barStyle={"light-content"}
          translucent={false}/>
        <Navigator
          backgroundColor={ThemeStyle.important_1}
          renderLeft={this._navigatorLeft}
          renderMiddle={this._navigatorMiddle}
          renderRight={this._navigatorRight}
          translucent={false}/>
      </View>
    );
  }
  _navigatorMiddle = () => {
    const routes = this.props.navigation.state.routes;
    return (
      <View style={styles.tabbarContainer}>
        {routes && routes.map((route, index) => this.renderItem(route, index))}
      </View>
    );
  }
  _navigatorLeft = () => {
    return (
      <TouchableOpacity activeOpacity={0.8} style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}} onPress={() => alert('are you ok?')}>
        <Icon style={{flex:1,textAlign:'center'}} name="list-ul" size={20} color="#fff"/>
      </TouchableOpacity>
    )
  }
  _navigatorRight = () => {
    return (
      <TouchableOpacity activeOpacity={0.8} style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}} onPress={() => alert('are you ok?')}>
        <Icon style={{flex:1,textAlign:'center'}} name="search" size={20} color="#fff"/>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  tabbarContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: width / 2.5
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});