import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Button,
    Alert
} from 'react-native';

import CartContext from '../contexts/CartContext';

export default function ProductListItem(props) {

    const { product } = props;
    const uriImg = 'http://myphamtina.net/Content/images/products/' + product.Images;

    return <View style={style.container}>
        <View>
            <TouchableOpacity activeOpacity={0.5}>
                <View style={{ alignItems: "center" }}>
                    <Image style={style.image}
                        source={{ uri: uriImg }}></Image>
                    <Text style={style.title}>{product.Name}</Text>
                </View>
            </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ flex: 1 }}>{product.Price}(vnđ)</Text>
            <TouchableOpacity activeOpacity={0.4}>
                <CartContext.Consumer>
                    {({ addToCart }) => <Button title="Add to card" onPress={() => addToCart(product)}></Button>}
                </CartContext.Consumer>
            </TouchableOpacity>
        </View>
    </View>;
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
        paddingBottom: 16,
        paddingTop: 16
    },
    image: {
        width: 120,
        height: 120
    }
});
