import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainRouter from '../Router/MainRouter'
import AuthRouter from '../Router/AuthRouter'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { changeUserAuthStateReducer } from '../REDUX/reducer/userReducer'
import { chnageOnBoaredStateReducer } from '../REDUX/reducer/appReducer'

const Route = () => {
    const {isLogin}=useSelector((state)=>state.user)
    const dispatch=useDispatch()
    const checkUserID=async()=>{
      const myID=  await AsyncStorage.getItem("userID")
      const onBoard=await AsyncStorage.getItem("onBoard")
      dispatch(changeUserAuthStateReducer(myID))
     dispatch(chnageOnBoaredStateReducer(onBoard))

    }

    useEffect(() => {
      checkUserID()
    }, [isLogin])
    
  return <>{isLogin?<MainRouter/>:<AuthRouter/>}</>
}

export default Route

const styles = StyleSheet.create({})