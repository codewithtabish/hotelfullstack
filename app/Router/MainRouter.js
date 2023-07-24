import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Main/Home/HomeScreen'

const MainRouter = () => {
     const Stack=createNativeStackNavigator()
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}
        />
    </Stack.Navigator>
    
   </NavigationContainer>
  )
}

export default MainRouter

const styles = StyleSheet.create({})