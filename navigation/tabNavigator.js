import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-ionicons";

import FeedScreen from '../Screens/feed';
import CreateStory from '../Screens/createStory';

const Tab = createBottomTabNavigator()

const BottomTabNavigator = ()=>{
  return (
      <Tab.Navigator
      screenOptions={({route})=>({
        tabBarIcon:({focused, color, size})=>{
          var iconName;
          if(route.name === "FeedScreen"){
            iconName = focused ? "book" : "book-outline"
          }
          else if(route.name === "CreateStory"){
            iconName = focused ? "create" : "create-outline"
          }
          return <Ionicons name={iconName} size={size} color={color} />
        }
      })}
      tabBarOptions={{
          activeTintColor:"tomato", inactiveTintColor:'gray'
      }}
      >

      <Tab.Screen name="FeedScreen" component={FeedScreen} />
      <Tab.Screen name="CreateStory" component={CreateStory} />

      </Tab.Navigator>
  );
}

export default BottomTabNavigator;