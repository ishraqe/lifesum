import React, { Component } from 'react';
import {
  View, StatusBar,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import StackNavigator from './router/router';
import colors from './assets/colors';

class App extends Component {
    componentDidMount() {
        SplashScreen.hide();
    }
  render() {
    return (
      <View style={{ flex: 1 }}>
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

