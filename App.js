import React from 'react';
import { StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import DrawerNavigator from './navigation/drawerNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
