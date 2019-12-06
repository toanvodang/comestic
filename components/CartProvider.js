import React, { Component } from 'react';
import { Alert } from 'react-native';
import CartContext from '../contexts/CartContext';

export default class extends Component {

    constructor(props) {

        super(props);

        this.state = {
            cartItems: []
        }

        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(item) {
        this.setState({
            cartItems: this.state.cartItems.concat(item)
        });

        setTimeout(() => {
            Alert.alert(this.state.cartItems.length);
        }, 500);
    };

    render() {
        return <CartContext.Provider value={
            {
                cartItems: this.state.cartItems,
                addToCart: this.addToCart
            }
        }>
            {this.props.children}
        </CartContext.Provider>;
    }
}