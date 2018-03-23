import React from 'react';
import { TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import AuthScreen from '../screens/Auth';
import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/SignUp';
import ChooseGenderScreen from '../component/SignUp/ChooseGender';


import colors from '../assets/colors';

const Left = ({ onPress }) => (
    <TouchableHighlight onPress={onPress}>
        <Icon
            name={'ios-close-outline'}
            size={40}
            color={colors.gradientColor1}
        />
    </TouchableHighlight>
);


const StackNavigators = StackNavigator({
    Home: {
        screen: AuthScreen,
        navigationOptions: {
            header: null,
        },
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            title: 'Login',
            headerStyle: {
                backgroundColor: colors.gradientColor1,
                marginTop: 20,
            },
            headerTitleStyle: {
                color: colors.whiteColor,
            },
            headerTintColor: '#fff',
        },
    },
    SignUp: {
        screen: SignUpScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: colors.gradientColor1,
                marginTop: 20,
                elevation: 0,
            },
            headerTintColor: '#fff',
        },
    },
    ChooseGender: {
        screen: ChooseGenderScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'YOUR BASICS',
            headerTitleStyle: {
                color: colors.gradientColor1,
                fontWeight: 'normal',
                fontSize: 18,
                alignSelf: 'center',
            },
            headerStyle: {
                backgroundColor: colors.headerBackGroundShawdow,
                marginTop: 20,
                elevation: 0,
                marginLeft: 20,
            },
            headerLeft: <Left onPress={() => { navigation.goBack(); }} />,
        }),
    },
});


export default StackNavigators;
