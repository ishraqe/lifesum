import { StyleSheet } from 'react-native';
import colors from '../assets/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },
    socialLoginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    socialLoginContainerText: {
        color: colors.black,
        fontSize: 16,
        fontWeight: 'bold',
    },
    customButton: {
      width: '100%',
      height: 50,
      borderRadius: 30,
      borderWidth: 0,
      margin: 8,
    },
    googleCustomButton: {
        backgroundColor: colors.whiteColor,
    },
    fbCustomButton: {
        backgroundColor: colors.facebookColor,
    },
    buttonText: {
        color: colors.black,
    },
    fbButtonText: {
      color: colors.whiteColor,
    },
    loginContainer: {
        flex: 1,
        marginTop: 30,
    },
    forgotPassContainer: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
