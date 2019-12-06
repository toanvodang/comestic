import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Categories from './screens/Categories';
import Category from './screens/Category';
import Cart from './screens/Cart';
import Order from './screens/Order';
import Setting from './screens/Setting';


const CateStack = createStackNavigator({
    Categories: {
        screen: Categories,
    },
    Category: {
        screen: Category,
    }
});

const color = {
    ACTIVE: 'red',
    INACTIVE: '#ccc'
};

CateStack.navigationOptions = {
    tabBarLabel: 'Categories',
    tabBarIcon: ({ focused }) => {
        return <Icon
            name="ios-list-box"
            size={36}
            color={focused ? color.ACTIVE : color.INACTIVE}></Icon>
    }
}

const CartStack = createStackNavigator({
    Cart: {
        screen: Cart
    }
});

CartStack.navigationOptions = {
    tabBarLabel: 'Cart',
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
        let badgeCount = 3;
        return (
            <View style={{ width: 24, height: 24, margin: 5 }}>
                <Icon name='ios-cart' size={36} color={focused ? color.ACTIVE : color.INACTIVE} />
                {badgeCount > 0 && (
                    <View
                        style={{
                            position: 'absolute',
                            right: -6,
                            top: -3,
                            backgroundColor: 'red',
                            borderRadius: 6,
                            width: 12,
                            height: 12,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                            {badgeCount}
                        </Text>
                    </View>
                )}
            </View>
        );
    },
}

const OrderStack = createStackNavigator({
    Oerder: {
        screen: Order
    }
});

OrderStack.navigationOptions = {
    tabBarLabel: 'Order',
    tabBarIcon: ({ focused }) => {
        return <Icon
            name="ios-cash"
            size={36}
            color={focused ? color.ACTIVE : color.INACTIVE}></Icon>
    }
}

const SettingStack = createStackNavigator({
    Setting: {
        screen: Setting
    }
});

SettingStack.navigationOptions = {
    tabBarLabel: 'Setting',
    tabBarIcon: ({ focused }) => {
        return <Icon
            name="ios-settings"
            size={36}
            color={focused ? color.ACTIVE : color.INACTIVE}></Icon>
    }
}

const AppNavigator = createBottomTabNavigator({
    CateStack: CateStack,
    CartStack: CartStack,
    OrderStack: OrderStack,
    SettingStack: SettingStack
},
    // {
    //     tabBarOptions: {
    //         activeTintColor: '#e91e63',
    //         labelStyle: {
    //             fontSize: 12,
    //         },
    //         style: {
    //             backgroundColor: 'blue',
    //         },
    //     }
    // }
);

export default AppNavigator;