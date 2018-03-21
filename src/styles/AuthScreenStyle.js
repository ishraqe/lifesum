import { StyleSheet } from 'react-native';
import colors from '../assets/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        height: '60%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    welcome: {
        color: colors.whiteColor,
        fontSize: 25,
    },
    title: {
        color: colors.whiteColor,
        fontSize: 60,
        fontFamily: 'Italianno_Regular',
    },
    buttonContainer: {
        height: '35%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    buttonStyle: {
        borderRadius: 30,
        width: '100%',
        height: 55,
        borderColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButton: {
        width: '100%',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: colors.whiteColor,
    },
    loginHeader: {
        marginTop: 20,
        marginBottom: 10,
        color: colors.whiteColor,
    },
});

export default styles;
