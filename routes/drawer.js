import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import SecStack from './secStack';
import AboutStack from './aboutStack';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    
    },
    Character: {
        screen: SecStack,
    },
    About: {
        screen: AboutStack
    }

});

export default createAppContainer(RootDrawerNavigator);