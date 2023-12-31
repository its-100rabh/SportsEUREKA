import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { CategoriesScreen } from '../screens/CategoriesScreen';
import Football from '../sport_screens/Football';
import Basketball from '../sport_screens/Basketball';
import Cricket from '../sport_screens/Cricket';
const Stack = createNativeStackNavigator();
// import { View, Text } from 'react-native'
// import React from 'react'

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
                <Stack.Screen name="Sports" options={{ headerShown: false }} component={CategoriesScreen} />
                <Stack.Screen name="Football" options={{ headerShown: false }} component={Football} />
                <Stack.Screen name="Basketball" options={{ headerShown: false }} component={Basketball}/>
                <Stack.Screen name="Cricket" options={{ headerShown: false }} component={Cricket}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}