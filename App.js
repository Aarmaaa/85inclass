import React from 'react';
import { StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import DrawerNavigator from './navigation/drawerNavigator';
import {createSwitchNavigator, createAppContainer } from "react-navigation";

import Login from './Screens/login';
import Loading from './Screens/loading';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
