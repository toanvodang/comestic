import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import axios from 'axios';
import ProductListItem from '../components/ProductListItem';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Category extends React.Component {

    constructor(props) {
        super(props);

        this.state = { products: [] };
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('Name', 'not found')
        };
    }

    componentDidMount() {
        axios.get('/Home/GetProductByCate?url=trang-diem&page=1')
            .then(res => this.setState({ products: res.data }))
            .catch(error => console.log(error));
    }

    render() {
        const { navigation } = this.props;
        const { products } = this.state;
        return (
            <FlatList data={products}
                renderItem={({ item }) => <ProductListItem product={item} />}
                keyExtractor={item => `${item.ID}`}
                contentContainerStyle={{ paddingLeft: 16, paddingRight: 16, paddingTop: 16 }}
            ></FlatList>
        );
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