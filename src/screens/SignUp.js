import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from "../styles/SignUpScreenStyle";
import colors from "../assets/colors";
import { CustomButton } from '../component/common';

class SignUp extends Component {
    componentDidMount() {
        StatusBar.setHidden(false);
    }
    render() {
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
                <TouchableOpacity
                    style={[styles.customButton]}
                >
                    <Text style={styles.titleStyle}>Be Healthier</Text>
                    <Text style={styles.subtitleStyle}>Eat and train for optimum health</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.customButton]}
                >
                    <Text style={styles.titleStyle}>Lose Weight</Text>
                    <Text style={styles.subtitleStyle}>Get leander and increase your stamina</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.customButton]}
                >
                    <Text style={styles.titleStyle}>Gain Weight</Text>
                    <Text style={styles.subtitleStyle}>Build muscle strength</Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}

export default SignUp;
