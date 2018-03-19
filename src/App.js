import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,Image
} from 'react-native';

import {
  getTheme,
} from 'react-native-material-kit';


const theme = getTheme();

class App extends Component {
  render() {
    return (
      <View style={theme.cardStyle}>
      <Image source={{uri : 'http://www.getmdl.io/assets/demos/welcome_card.jpg'}} style={theme.cardImageStyle} />
      <Text style={theme.cardTitleStyle}>Welcome</Text>
      <Text style={theme.cardContentStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
      </Text>
      <View style={theme.cardMenuStyle}><Text>log and more</Text></View>
      <Text style={theme.cardActionStyle}>My Action</Text>
    </View>
    );
  }
}


export default App;

