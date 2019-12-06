import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

import CategoryListItem from '../components/CategoryListItem';

export default class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = { categories: [] }
    }

    componentDidMount() {
        axios.get('/Home/GetCategory')
            .then(res => this.setState({ categories: res.data }))
            .catch(error => console.log(error));
    }

    static navigationOptions = {
        title: 'Categories',
    };

    render() {
        const { navigation } = this.props;
        const { categories } = this.state;
        return (
            <FlatList data={categories}
                renderItem={({ item }) => <CategoryListItem category={item}
                    onPress={() => navigation.navigate('Category', item)} />}
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