import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

import colors from '../../assets/colors';
import styles from '../../styles/ChooseGenderScreenStyle';
import { CustomButton } from '../common';

class ChooseGender extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={colors.headerBackGroundShawdow}
                    animated
                    barStyle="dark-content"
                />
                <Text style={styles.introStyle}>Hi !</Text>
                <Text style={styles.subIntro}>Let's start with the basics</Text>
                <View style={styles.buttonContainer}>
                    <CustomButton
                        style={styles.customButton}
                        textStyle={styles.buttonText}
                        onPress={() => this.props.navigation.navigate('SignUp')}
                    >
                        FEMALE
                    </CustomButton>
                    <CustomButton
                        style={styles.customButton}
                        textStyle={styles.buttonText}
                        onPress={() => this.props.navigation.navigate('SignUp')}
                    >
                        MALE
                    </CustomButton>
                </View>
            </View>
        );
    }
}

export default ChooseGender;