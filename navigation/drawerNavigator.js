import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import TabNavigator from './tabNavigator';

import ProflieScreen from '../Screens/Proflie';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=>{
    return(
        <Drawer.Navigator>

            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="ProflieScreen" component={ProflieScreen} />
            
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;