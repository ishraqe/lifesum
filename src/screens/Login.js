import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../styles/LoginScreenStyle';
import { CustomButton, Input } from '../component/common';
import images from '../assets/images';
import colors from '../assets/colors';


class Login extends Component {
    componentDidMount() {
        StatusBar.setHidden(false);
    }
    render() {
        return (
            <KeyboardAwareScrollView>
                <View style={[styles.container]}>
                <StatusBar
                    backgroundColor="#55c18f"
                    animated
                    barStyle="light-content"
                />
                <View style={styles.socialLoginContainer}>
                    <Text style={[styles.socialLoginContainerText, { marginTop: 10 }]}>Welcome Back !</Text>
                    <Text style={[styles.socialLoginContainerText, { marginBottom: 20 }]}> It's good to see you again.</Text>
                    <CustomButton
                        style={[styles.customButton, styles.googleCustomButton]}
                        textStyle={styles.buttonText}
                        imagePath={images.googleIcon}
                    >
                        LOG IN WITH GOOGLE
                    </CustomButton>

                    <CustomButton
                        style={[styles.customButton, styles.fbCustomButton]}
                        textStyle={[styles.buttonText, styles.fbButtonText]}
                        label={'logo-facebook'}
                    >
                        LOG IN WITH FACEBOOK
                    </CustomButton>
                </View>
                <View style={styles.loginContainer}>
                    <Text style={[styles.socialLoginContainerText, { marginTop: 10, alignSelf: 'center' }]}> or </Text>
                   <Input
                    placeholder='Email'
                   />
                    <Input
                        placeholder='Password'
                    />
                    <CustomButton
                        style={[styles.customButton, { backgroundColor: colors.signUpButtonColor, marginTop: 30 }]}
                        textStyle={[styles.buttonText, styles.fbButtonText]}
                        label='md-mail'
                    >
                        LOG IN WITH EMAIL
                    </CustomButton>
                </View>
                <TouchableOpacity style={styles.forgotPassContainer}>
                    <Text style={[styles.socialLoginContainerText, { fontSize: 10 }]}>GET NEW PASSWORD ? </Text>
                </TouchableOpacity>
            </View>
            </KeyboardAwareScrollView>
        );
    }
}

export default Login;