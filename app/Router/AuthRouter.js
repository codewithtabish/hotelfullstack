import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RegisterScreen from '../Auth/Register/RegisterScreen'
import LoginScreen from '../Auth/Login/LoginScreen'
import ForgotScreen from '../Auth/Forgot/ForgotScreen'
import OnBoardScreen from '../Auth/OnBoard/OnBoardScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { chnageOnBoaredStateReducer } from '../REDUX/reducer/appReducer'

const AuthRouter = () => {
    const [onBoardValue, setonBoardValue] = useState(true)
    const Stack=createNativeStackNavigator()
    const dispatch=useDispatch()
    const {onBoardScreen}=useSelector((state)=>state.app)

    const checkOnBoardAvalibilit=async()=>{
        const data=await AsyncStorage.getItem("onBoard")
        if(data===null){
          setonBoardValue(true)
          await AsyncStorage.setItem('onBoard','onBoard Value')
        //   dispatch(chnageOnBoaredStateReducer())

        }
        if(data){
          setonBoardValue(false)
        }
    
      }

      useEffect(() => {
        checkOnBoardAvalibilit()
       
      }, [])
      
  return (
    <NavigationContainer>
        <Stack.Navigator>
     {
      onBoardValue?
      <Stack.Screen
    name='OnBoard'
    component={OnBoardScreen}
    options={{
        headerShown:false
      }}
    />:null
    }
            <Stack.Screen name='Login' component={LoginScreen}
            options={{headerShown:false}}/>
            <Stack.Screen name='SignUp' component={RegisterScreen}
            options={{headerShown:false}}/>
            <Stack.Screen name='Forgot' component={ForgotScreen}/>
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default AuthRouter

const styles = StyleSheet.create({})