import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import AbilityScores from '../screens/ability';
import Skills from '../screens/skills';
import Equip from '../screens/equip';
import Traits from '../screens/traits';
import Items from '../screens/items';
import Header from '../shared/header';
import Spells from '../screens/spells'
import React from 'react';

const screens = {
    Home: {
        screen: Home, 
        navigationOptions: ({ navigation }) => {
            return{
                headerTitle: () => <Header navigation={navigation} />,
                headerTitleAlign: 'center',
            }
        }
    },
    Items: {
        screen: Items,
        navigationOptions: {
            title: 'Items'
        }
    },
    AbilityScores: {
        screen: AbilityScores,
        navigationOptions: {
            title: 'Ablity Scores and Modifiers'
        }
    },
    Skills: {
        screen: Skills,
        navigationOptions: {
            title: 'Special Skills'
        }
    },
    Money: {
        screen: Equip,
        navigationOptions: {
            title: 'Your Equipments'
        }
    },
    Traits: {
        screen: Traits,
        navigationOptions: {
            title: 'Special Traits'
        }
    },
    Spells: {
        screen: Spells,
        navigationOptions: {
            title: 'Spell list'
        }
    }
    
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#ccc', height: 60 }
    }
});

export default HomeStack;