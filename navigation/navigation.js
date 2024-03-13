import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { CategoriesScreen } from "../screens/CategoriesScreen";
import Football from "../sport_screens/Football";
import Basketball from "../sport_screens/Basketball";
import Cricket from "../sport_screens/Cricket";
import IntroScreen from "../screens/IntroScreen";
import DrawerNavigation from "./drawernavigation";
import Baseball from "../sport_screens/Baseball";
import Volleyball from "../sport_screens/Volleyball";
import Tennis from "../sport_screens/Tennis";
import Bowling from "../sport_screens/Bowling";
const Stack = createNativeStackNavigator();
// import { View, Text } from 'react-native'
// import React from 'react'

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Drawer"
          options={{ headerShown: false }}
          component={DrawerNavigation}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Sports"
          options={{ headerShown: false }}
          component={CategoriesScreen}
        />
        <Stack.Screen
          name="Introduction"
          options={{ headerShown: false }}
          component={IntroScreen}
        />
        <Stack.Screen
          name="Football"
          options={{ headerShown: false }}
          component={Football}
        />
        <Stack.Screen
          name="Basketball"
          options={{ headerShown: false }}
          component={Basketball}
        />
        <Stack.Screen
          name="Cricket"
          options={{ headerShown: false }}
          component={Cricket}
        />
        <Stack.Screen
          name="Baseball"
          options={{ headerShown: false }}
          component={Baseball}
        />
        <Stack.Screen
          name="Volleyball"
          options={{ headerShown: false }}
          component={Volleyball}
        />
        <Stack.Screen
          name="Tennis"
          options={{ headerShown: false }}
          component={Tennis}
        />
        <Stack.Screen
          name="Bowling"
          options={{ headerShown: false }}
          component={Bowling}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
