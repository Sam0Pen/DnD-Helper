import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import React from 'react';
import Header from '../shared/header';


const screens = {
    About: {
        screen: About, 
        navigationOptions: ({ navigation }) => {
            return{
                headerTitle: () => <Header navigation={navigation} />,
                headerTitleAlign: 'center',
            }
        }
    },   
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#ccc', height: 60 }
    }
});

export default AboutStack;