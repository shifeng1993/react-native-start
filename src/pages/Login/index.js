import React, {Component} from 'react'
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import {RootView} from '../../components'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <RootView
        style={{
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text>我是登录页面</Text>
      </RootView>
    );
  }
}

const styles = StyleSheet.create({
})

export default Login;