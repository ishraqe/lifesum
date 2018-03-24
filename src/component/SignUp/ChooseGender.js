import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

import colors from '../../assets/colors';
import { ChooseGenderStyle } from '../../styles/SignUpBasicInfoScreenStyle';
import { CustomButton } from '../common';

class ChooseGender extends Component {
    render() {
        return (
            <View style={ChooseGenderStyle.container}>
                <StatusBar
                    backgroundColor={colors.headerBackGroundShawdow}
                    animated
                    barStyle="dark-content"
                />
                <Text style={ChooseGenderStyle.introStyle}>Hi !</Text>
                <Text style={ChooseGenderStyle.subIntro}>Let's start with the basics</Text>
                <View style={ChooseGenderStyle.buttonContainer}>
                    <CustomButton
                        style={ChooseGenderStyle.customButton}
                        textStyle={ChooseGenderStyle.buttonText}
                        onPress={() => this.props.navigation.navigate('BasicInfo', {
                            gender: 'female',
                        })}
                    >
                        FEMALE
                    </CustomButton>
                    <CustomButton
                        style={ChooseGenderStyle.customButton}
                        textStyle={ChooseGenderStyle.buttonText}
                        onPress={() => this.props.navigation.navigate('BasicInfo', {
                            gender: 'male',
                        })}
                    >
                        MALE
                    </CustomButton>
                </View>
            </View>
        );
    }
}

export default ChooseGender;