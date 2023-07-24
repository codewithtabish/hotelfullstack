import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import Route from './Route'
import { store } from '../REDUX/store'
import ToastManager, { Toast } from 'toastify-react-native'
import { chnageOnBoaredStateReducer } from '../REDUX/reducer/appReducer'

const AppProvider = () => {
    const dispatch=useDispatch()
  const checkOnBoardAvalibilit=async()=>{
    const onBoard=await AsyncStorage.getItem("onBoard")
    await AsyncStorage.removeItem("onBoard")
    dispatch(chnageOnBoaredStateReducer(onBoard))

  }
  useEffect(() => {
   checkOnBoardAvalibilit()
  }, [])
      
  return (
    <>
        <ToastManager/>
        <Route/>
    </>
  )
}

export default AppProvider

const styles = StyleSheet.create({})