// DrawerNavigation.js

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "../screens/HomeScreen";
import { CategoriesScreen } from "../screens/CategoriesScreen";
import IntroScreen from "../screens/IntroScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Drawer.Screen
        name="Sports"
        options={{ headerShown: false }}
        component={CategoriesScreen}
      />
      <Drawer.Screen
        name="Introduction"
        options={{ headerShown: false }}
        component={IntroScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
