import { createStackNavigator } from 'react-navigation-stack';
import Format from '../screens/format';
import React from 'react';
import Header from '../shared/header';
import Char from '../screens/char';
import Edit from '../screens/edit';

const screens = {
    Char: {
        screen: Char, 
        navigationOptions: ({ navigation }) => {
            return{
                headerTitle: () => <Header navigation={navigation} />,
                headerTitleAlign: 'center',
            }
        }
    },
    Format: {
        screen: Format,
        navigationOptions:{
            title: 'Create'
        }
    },
    Edit: {
        screen: Edit,
        navigationOprions:{
            title: 'Edit'
        }
    }
    
}

const SecStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#ccc', height: 60 }
    }
});

export default SecStack;