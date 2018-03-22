import { StackNavigator } from 'react-navigation';

import AuthScreen from '../screens/Auth';
import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/SignUp';
import colors from '../assets/colors';

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
});


export default StackNavigators;
