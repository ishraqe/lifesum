import React, { Component } from 'react';
import { View, Text } from 'react-native';

// eslint-disable-line react/prefer-stateless-function
import styles from '../styles/LoginScreenStyle';
import { CustomButton } from '../component/common';
import colors from '../assets/colors';

class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.socialLoginContainer}>
                    <Text style={styles.socialLoginContainerText}>Welcome Back !</Text>
                    <Text style={styles.socialLoginContainerText}> It's good to see you again.</Text>
                    <CustomButton
                        style={[styles.customButton, styles.googleCustomButton]}
                        textStyle={styles.buttonText}
                        label="logo-facebook"
                    >
                        LOG IN WITH GOOGLE
                    </CustomButton>

                    <CustomButton
                        style={[styles.customButton, styles.fbCustomButton]}
                        textStyle={[styles.buttonText, styles.fbButtonText]}
                    >
                        LOG IN WITH FACEBOOK
                    </CustomButton>
                </View>
                <View style={styles.loginContainer}>
                    <Text>Login</Text>
                </View>
                <View style={styles.forgotPassContainer}>
                    <Text>Login</Text>
                </View>
            </View>


        );
    }
}

export default Login;