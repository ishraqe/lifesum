import React, { Component } from 'react';
import {
  View, StatusBar,
} from 'react-native';
import StackNavigator from './router/router';
import colors from './assets/colors';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20  }}>
          <StatusBar
              translucent
              backgroundColor={colors.gradientColor1}
              animated
          />
          <StackNavigator />
      </View>
    );
  }
}


export default App;

