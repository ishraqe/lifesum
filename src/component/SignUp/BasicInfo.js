import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    ScrollView,
    TextInput,
    Animated,
    Dimensions,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

import colors from '../../assets/colors';
import { ChooseGenderStyle, BasicInfoStyle } from '../../styles/SignUpBasicInfoScreenStyle';
import { CustomButton } from '../common';
import validate from '../../utility/validation';

const WINDOW_WIDTH = Dimensions.get('window').width;
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

class ChooseGender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGender: '',
            addHeightInfo:  new Animated.Value(0),
            controls: {
                age: {
                    value: '',
                    valid : false,
                    validationRules : {
                        minLength: 3
                    },
                    touched :  false
                },
                height: {
                    value: '',
                    valid: false,
                    validationRules: {
                        minHeight: 1
                    },
                    touched: false
                },
                weight: {
                    value: '',
                    valid: false,
                    validationRules: {
                        minWidth: 1,
                    },
                    touched: false
                }
            }
        };
    }
    componentDidMount() {
        const { params } = this.props.navigation.state;
        const gender = params ? params.gender : '';
        this.setState({
            selectedGender: gender,
        });
    }

    updateInputState = (key, val) => {
        console.log(key, val);
        this.setState( prevState => {
            return {
                controls : {
                    ...prevState.controls,
                    [key] : {
                        ...prevState.controls[key],
                        value: val,
                        valid: validate(val, prevState.controls[key].validationRules),
                        touched: true,
                    }
                }
            }
        });
        console.log(this.state.controls.height.valid);
        if (key === 'height' && this.state.controls.height.valid) {
            Animated.timing(this.state.addHeightInfo, {
                toValue: 1,
                duration: 1
            }).start();
        }
    }
    renderHeightIcon = (category, val) => {
        switch (category) {
            case category === 'height' :
                if (this.state.controls.height.valid && category === 'height') {
                    return (
                        <TouchableWithoutFeedback>
                            <Text>{val}</Text>
                            <Image
                                source={ require('../../assets/height.png') }
                                style={{height: 40, width: 40}}
                            />
                        </TouchableWithoutFeedback>
                    );
                }else {
                    return (
                        <View style={BasicInfoStyle.textInputWrapper}>
                            <Text style={BasicInfoStyle.label}>Your Age</Text>
                            <TextInput
                                style={BasicInfoStyle.Input}
                                underlineColorAndroid={colors.gradientColor1}
                                returnKeyType={'next'}
                                secureTextEntry={false}
                                keyboardType={'numeric'}
                            />
                        </View>
                    );
                }

        }

        if (this.state.controls.weight.valid && category === 'weight') {
            return (
                <TouchableWithoutFeedback>
                    <Text>{val}</Text>
                    <Image
                        source={ require('../../assets/weight.png') }
                        style={{height: 40, width: 40}}
                    />
                </TouchableWithoutFeedback>
            );
        }else {
            return (
                <View style={BasicInfoStyle.textInputWrapper}>
                    <Text style={BasicInfoStyle.label}>Your Age</Text>
                    <TextInput
                        style={BasicInfoStyle.Input}
                        underlineColorAndroid={colors.gradientColor1}
                        returnKeyType={'next'}
                        secureTextEntry={false}
                        keyboardType={'numeric'}
                    />
                </View>
            );
        }
        if (this.state.controls.height.valid && category === 'age') {
            return (
                <TouchableWithoutFeedback>
                    <Text>{val}</Text>
                    <Image
                        source={ require('../../assets/age.png') }
                        style={{height: 40, width: 40}}
                    />
                </TouchableWithoutFeedback>
            );
        }else {
            return (
                <View style={BasicInfoStyle.textInputWrapper}>
                    <Text style={BasicInfoStyle.label}>Your Age</Text>
                    <TextInput
                        style={BasicInfoStyle.Input}
                        underlineColorAndroid={colors.gradientColor1}
                        returnKeyType={'next'}
                        secureTextEntry={false}
                        keyboardType={'numeric'}
                    />
                </View>
            );
        }
    }
    render() {
        const  heightBarChange = this.state.addHeightInfo.interpolate({
            inputRange: [0, 1],
            outputRange: [WINDOW_WIDTH, WINDOW_WIDTH - 100]
        });

        return (
            <ScrollView >
                <StatusBar
                    backgroundColor={colors.headerBackGroundShawdow}
                    animated
                    barStyle="dark-content"
                />
                <View style={ChooseGenderStyle.buttonContainer}>
                    <CustomButton
                        style={[ChooseGenderStyle.customButton, this.state.selectedGender === 'male' ? { backgroundColor: colors.buttonShadowBackground } : '']}
                        textStyle={ChooseGenderStyle.buttonText}
                        onPress={() => this.props.navigation.navigate('SignUp')}
                    >
                        FEMALE
                    </CustomButton>
                    <CustomButton
                        style={[ChooseGenderStyle.customButton, this.state.selectedGender === 'female' ? { backgroundColor: colors.buttonShadowBackground } : '']}
                        textStyle={ChooseGenderStyle.buttonText}
                        onPress={() => this.props.navigation.navigate('SignUp')}
                    >
                        MALE
                    </CustomButton>
                </View>
                <View style={BasicInfoStyle.textInputContainer}>
                    {this.renderHeightIcon('age', this.state.controls.age.value)}
                    {this.renderHeightIcon('height', this.state.controls.height.value)}
                    {this.renderHeightIcon('weight', this.state.controls.weight.value)}
                </View>
            </ScrollView>
        );
    }
}

export default ChooseGender;