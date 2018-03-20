import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';

import styles from '../styles/HomeScreenStyle';
import bg from '../assets/bg.mp4';
import { CustomButton } from '../component/common';
import colors from '../assets/colors';

class App extends Component {
    componentDidMount() {
        StatusBar.setBarStyle('light-content');
    }
  render() {
    return (
      <View style={styles.container}>
            <Video
              muted={false}
              repeat={true}
              source={bg}
              resizeMode="cover"
              style={[StyleSheet.absoluteFill, { marginLeft: -550 }]}
            />
          <View style={styles.menuContainer}>
              <View style={styles.titleContainer}>
                  <Text style={styles.welcome}>Welcome To</Text>
                  <Text style={styles.title}>Lifesum</Text>
              </View>
              <View style={styles.buttonContainer}>
                  <LinearGradient
                      start={{ x: 0.1, y: 0.1 }}
                      end={{ x: 0.5, y: 1.0 }}
                      colors={[colors.gradientColor1, colors.gradientColor2]}
                      style={styles.buttonStyle}
                  >
                      <CustomButton
                          style={styles.customButton}
                          textStyle={styles.buttonText}
                      >
                         SIGN UP
                      </CustomButton>
                  </LinearGradient>
                  <Text style={styles.loginHeader}>Got a Lifesum account?</Text>
                  <CustomButton
                      style={[styles.customButton, { backgroundColor: colors.whiteColor, height: 55, borderRadius: 30, }]}
                      textStyle={[styles.buttonText, { color: '#000' }]}
                  >
                      LOG IN
                  </CustomButton>
              </View>
          </View>
      </View>
    );
  }
}


export default App;

