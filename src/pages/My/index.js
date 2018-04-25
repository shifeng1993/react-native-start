import React, {Component} from 'react';
import {
  ScrollView,View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import {StatusBar, Navigator,RootView} from '../../components';

class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <RootView style={{alignItems: 'center',justifyContent: 'center'}}>
        <Text>My</Text>
      </RootView>
    );
  }
}

const styles = StyleSheet.create({
})

export default My;