import { createStackNavigator } from 'react-navigation';

import Home from './screens/Home'

export const createRootNavigator = () => {
    return createStackNavigator(
        {
            home: Home
        },
        {
            initialRouteName: 'home',
            headerMode: 'none'
        }
    );
}