import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';

import snowboard from '../assets/images/snowboard.png';

export default function CategoryListItem(props) {

    const { category, onPress } = props;

    return <TouchableOpacity activeOpacity={.8} onPress={onPress}>
        <View style={style.container}>
            <Text style={style.title}>{category.Name}</Text>
            <Image style={style.categoryImage} source={snowboard}></Image>
        </View>
    </TouchableOpacity>
}

const style = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 16,
        borderRadius: 4,
        shadowColor: '#000',
        backgroundColor: '#fff',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 16
    },
    title: {
        fontWeight: '700',
        textTransform: 'uppercase',
        marginBottom: 8
    },
    categoryImage: {
        width: 64,
        height: 64
    }
});
