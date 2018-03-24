import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, TextInput } from 'react-native';
import {
    MKTextField,
    MKColor,
    mdl,
} from 'react-native-material-kit';
import colors from '../../assets/colors';
import { ChooseGenderStyle, BasicInfoStyle } from '../../styles/SignUpBasicInfoScreenStyle';
import { CustomButton } from '../common';

const Age = MKTextField.textfieldWithFloatingLabel()
    .withPlaceholder('Your age')
    .withStyle(BasicInfoStyle.textfield)
    .withTextInputStyle({ flex: 1 })
    .withFloatingLabelFont({
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: '200',
        color: colors.gradientColor1,
    })
    .withTintColor(colors.gradientColor2)
    .withKeyboardType('numeric')
    .withDefaultValue('20')
    .withHighlightColor(colors.gradientColor2)
    .withOnFocus(() => console.log('Focus'))
    .withOnBlur(() => console.log('Blur'))
    .withOnEndEditing((e) => console.log('EndEditing', e.nativeEvent.text))
    .withOnSubmitEditing((e) => console.log('SubmitEditing', e.nativeEvent.text))
    .withOnTextChange((e) => console.log('TextChange', e))
    .withOnChangeText((e) => console.log('ChangeText', e))
    .build();

const Height = MKTextField.textfieldWithFloatingLabel()
    .withPlaceholder('Your height')
    .withStyle(BasicInfoStyle.textfield)
    .withTextInputStyle({ flex: 1 })
    .withFloatingLabelFont({
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: '200',
        color: colors.gradientColor1,
    })
    .withTintColor(colors.gradientColor2)
    .withKeyboardType('numeric')
    .withDefaultValue('20')
    .withHighlightColor(colors.gradientColor2)
    .withOnFocus(() => console.log('Focus'))
    .withOnBlur(() => console.log('Blur'))
    .withOnEndEditing((e) => console.log('EndEditing', e.nativeEvent.text))
    .withOnSubmitEditing((e) => console.log('SubmitEditing', e.nativeEvent.text))
    .withOnTextChange((e) => console.log('TextChange', e))
    .withOnChangeText((e) => console.log('ChangeText', e))
    .build();

const Weight = MKTextField.textfieldWithFloatingLabel()
    .withPlaceholder('Your width')
    .withStyle(BasicInfoStyle.textfield)
    .withTextInputStyle({ flex: 1 })
    .withFloatingLabelFont({
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: '200',
        color: colors.gradientColor1,
    })
    .withTintColor(colors.gradientColor2)
    .withKeyboardType('numeric')
    .withDefaultValue('20')
    .withHighlightColor(colors.gradientColor2)
    .withOnFocus(() => console.log('Focus'))
    .withOnBlur(() => console.log('Blur'))
    .withOnEndEditing((e) => console.log('EndEditing', e.nativeEvent.text))
    .withOnSubmitEditing((e) => console.log('SubmitEditing', e.nativeEvent.text))
    .withOnTextChange((e) => console.log('TextChange', e))
    .withOnChangeText((e) => console.log('ChangeText', e))
    .build();

class ChooseGender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGender: '',
        };
    }
    componentDidMount() {
        const { params } = this.props.navigation.state;
        const gender = params ? params.gender : '';
        this.setState({
            selectedGender: gender,
        });
    }
    render() {
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
                    <Age />
                    <Height />
                    <Weight />
                </View>
            </ScrollView>
        );
    }
}

export default ChooseGender;