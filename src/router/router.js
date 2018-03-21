import React from 'react';

import { StackNavigator } from 'react-navigation';

import AuthScreen from '../screens/Auth';


const StackNavigators = StackNavigator({
    Home: {
        screen: AuthScreen,
        navigationOptions: {
            header: null,
        },
    },
});


export default StackNavigators;
