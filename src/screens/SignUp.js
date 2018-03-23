import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Animated, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from "../styles/SignUpScreenStyle";
import colors from "../assets/colors";



const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);
const ButtonWidth = Dimensions.get('window').width - 20;


class SignUp extends Component {
    state = {
        buttonAnimation: new Animated.Value(ButtonWidth),
        fontAnimation: new Animated.Value(0),
        visibleText1 : true,
        visibleText2 : true,
        visibleText3 : true,
    };
    componentDidMount() {
        StatusBar.setHidden(false);
        this.setState({
            buttonAnimation: new Animated.Value(ButtonWidth),
            fontAnimation: new Animated.Value(0),
        });
    }
    handlePress = () => {
        console.log('pressed');
        Animated.parallel([
            Animated.timing(this.state.buttonAnimation, {
                toValue: 80,
                duration: 10
            }),
            Animated.timing(this.state.fontAnimation, {
                toValue: 1,
                duration: 10
            }),
        ]).start(() => {
            setTimeout(() => {
                this.props.navigation.navigate('ChooseGender')
            }, 1000);
        });
    }
    render() {
        const animatedStyle = {
            width: this.state.buttonAnimation,
        };
        const  titleFontSize = this.state.fontAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 0]
        });
        const  subtitleFontSize = this.state.fontAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [15, 0]
        });
        return (
            <LinearGradient
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 1.0 }}
                colors={[colors.gradientColor1, colors.gradientColor2]}
                style={styles.container}
            >
                <StatusBar
                    backgroundColor="#55c18f"
                    animated
                    barStyle="light-content"
                />
                <Text style={styles.heading}>What's your goal?</Text>
                <AnimatedTouchableOpacity
                    onPress={this.handlePress}
                    style={[styles.customButton, animatedStyle]}
                >
                    <Animated.Text style={[styles.titleStyle, { fontSize: titleFontSize}]}>Be Healthier</Animated.Text>
                    <Animated.Text style={[styles.subtitleStyle, {fontSize: subtitleFontSize}]}>Eat and train for optimum health</Animated.Text>
                </AnimatedTouchableOpacity>

                <AnimatedTouchableOpacity
                    onPress={this.handlePress}
                    style={[styles.customButton, animatedStyle]}
                >
                    <Animated.Text style={[styles.titleStyle, { fontSize: titleFontSize}]}>Lose Weight</Animated.Text>
                    <Animated.Text style={[styles.subtitleStyle, {fontSize: subtitleFontSize}]}>Get leander and increase your stamina</Animated.Text>
                </AnimatedTouchableOpacity>

                <AnimatedTouchableOpacity
                    onPress={this.handlePress}
                    style={[styles.customButton, animatedStyle]}
                >
                        <Animated.Text style={[styles.titleStyle, { fontSize: titleFontSize}]}>Gain Weight</Animated.Text>
                        <Animated.Text style={[styles.subtitleStyle, {fontSize: subtitleFontSize}]}>Build muscle strength</Animated.Text>
                </AnimatedTouchableOpacity>
            </LinearGradient>
        );
    }
}

export default SignUp;
