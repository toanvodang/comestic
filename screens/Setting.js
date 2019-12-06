import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Setting extends React.Component {

    static navigationOptions = {
        title: 'Setting',
    };

    render() {
        return <View><Text>Setting</Text></View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16
    }
});