import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import StackNavigator from './router/router';

class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
          <StackNavigator />
      </View>
    );
  }
}


export default App;

