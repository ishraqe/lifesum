import React from 'react';

import { StackNavigator } from 'react-navigation';

import AuthScreen from '../screens/Auth';
import LoginScreen from '../screens/Login'

const StackNavigators = StackNavigator({
    Home: {
        screen: AuthScreen,
        navigationOptions: {
            header: null,
        },
    },
    Login: {
        screen: LoginScreen,

    },
});


export default StackNavigators;
