// navigation/AppNavigator.tsx
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

const AppNavigator = createSwitchNavigator(
    {
        Home: HomeStack,
    },
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(AppNavigator);
