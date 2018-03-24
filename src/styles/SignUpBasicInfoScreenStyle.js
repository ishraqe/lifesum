import { StyleSheet } from 'react-native';
import colors from '../assets/colors';

export const ChooseGenderStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.whiteColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    introStyle: {
        color: colors.black,
        fontSize: 48,
        fontWeight: 'normal',
        marginBottom: 20,
    },
    subIntro: {
        color: colors.fontGreyColor,
        fontSize: 18,
        fontWeight: 'normal',
        marginBottom: 20,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 20,
        paddingLeft: 20,
    },
    customButton: {
        backgroundColor: colors.gradientColor1,
        borderColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 50,
    },
    buttonText: {
        color: colors.whiteColor,
        fontSize: 19,
        fontWeight: 'normal',
    },
});

export const BasicInfoStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
    textInputContainer: {
        flex: 1,
        padding: 20,
    },
    textfield: {
        marginTop: 30,
    },
});

