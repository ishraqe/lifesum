import React from 'react';
import { View, Text, TouchableNativeFeedback, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const CustomButton = (props) => {
    const { buttonStyle, textStyle} = styles;
    const { label, imagePath } = props;
    console.log(props);
    const content = (
        <View style={[buttonStyle, props.style]}>
            <Text style={[textStyle, props.textStyle]}>
                { props.children }
            </Text>
        </View>
    );
    if(label) {
        return (
            <View style={[buttonStyle, props.style, {flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}]}>
                <Icon
                    name={label}
                    size={40}
                    style={styles.iconStyle}
                />
                <Text style={[textStyle, props.textStyle]}>
                    {props.children}
                </Text>
            </View>
        );
    }
    if(imagePath) {
        return (
            <View style={[buttonStyle, props.style, {flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}]}>
                <Image
                    source={imagePath}
                    style={styles.imageStyle}
                />
                <Text style={[textStyle, props.textStyle]}>
                    {props.children}
                </Text>
            </View>
        );
    }
    return (
        <TouchableNativeFeedback onPress={props.onPress} >
            {content}
        </TouchableNativeFeedback>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#2ecc71',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        backgroundColor: '#fff',
        borderWidth: 1,
        width: '50%',
        borderRadius: 20,
    },
    iconStyle: {
        color: '#fff',
        marginLeft: 5,
        marginRight: 20,
    },
    imageStyle: {
        height: 40,
        width: 40,
        marginLeft: 0,
        marginRight: 20,
    },
};

export { CustomButton };