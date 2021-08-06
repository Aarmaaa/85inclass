import React from 'react';
import TabNavigator from './tabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import Story from '../Screens/story';

const Stack = createStackNavigator()

const StackNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Home" screenOption={{headerShown: false }} >
            <Stack.Screen name="Home" component={TabNavigator} />
            <Stack.Screen name="Story" component={Story} />
        </Stack.Navigator>
    )
}

export default StackNavigator ;