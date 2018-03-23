import { StyleSheet } from 'react-native';
import colors from '../assets/colors';

const styles = StyleSheet.create({
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

export default styles;