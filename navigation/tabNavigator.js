import React from 'react';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import FeedScreen from '../Screens/feed';
import CreateStory from '../Screens/createStory';

const Tab = createMaterialBottomTabNavigator()

const BottomTabNavigator = ()=>{
  return (
      <Tab.Navigator
      labeled={false} 
      barStyle={styles.bottomTabStyle}
      screenOptions={({route})=>({
        tabBarIcon:({focused, color, size})=>{
          var iconName;
          if(route.name === "FeedScreen"){
            iconName = focused ? "home" : "home-outline"
          }
          else if(route.name === "CreateStory"){
            iconName = focused ? "add-circle" : "add-circle-outline"
          }
          return <Ionicons name={iconName} size={RFValue(25)} color={color} style={styles.icons} />
        }
      })} 
      inactiveColor={"gray"}
      activeColor={"#ee8249"}
      >

      <Tab.Screen name="FeedScreen" component={FeedScreen} />
      <Tab.Screen name="CreateStory" component={CreateStory} />

      </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  bottomTabStyle:{
    backgroundColor:"#010347",
    height:"8%",
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    position:"absolute",
    overflow:'hidden'
  },
  icons:{
    width:RFValue(30),
    height:RFValue(30),
  }
})