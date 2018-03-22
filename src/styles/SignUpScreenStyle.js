import { StyleSheet } from 'react-native';
import colors from '../assets/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: colors.whiteColor,
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 20,
    },
    customButton: {
        height: 80,
        width: '85%',
        backgroundColor: colors.whiteColor,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    titleStyle: {
        color: colors.gradientColor1,
        fontWeight: '300',
        fontSize: 20,
    },
    subtitleStyle: {
        color: colors.fontGreyColor,
        fontSize: 15,
    },
});

export default styles;
