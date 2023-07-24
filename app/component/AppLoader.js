import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
// import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
// import LottieView from 'lottie-react-native';
import Lottie from 'lottie-react-native';
import { Dimensions } from 'react-native';
import Modal from "react-native-modal";

// import LoaderKit from 'react-native-loader-kit'

const AppLoader = () => {
    const animationRef = useRef(null)
    const {width,height} =Dimensions.get('window')

  return (
    <View style={{position:"absolute",
    backgroundColor: 'rgba(0,0,0,0.1)',
    top:"50%",marginHorizontal:'20%',flex:1,flexDirection:"row",
    justifyContent:"center",alignItems:"center",flex:1,
    backgroundColor:"red"
    }}>
    <Modal isVisible={true}
      animationType="fade"
      transparent={true}
    //   style={{backgroundColor: 'rgba(0,0,0,0.000001)'}}
    >
    <View style={{flex:1,justifyContent:"center",alignItems:"center",
flexDirection:"row"}}>
    <Lottie
      style={{width:200,height:200,margin:"auto"}}
      // ref={animationRef}
      source={require('../../assets/anim/loader.json')}
      autoPlay
      loop
    />
    </View>
</Modal>
        
{/* <LoaderKit
  style={{ width: 50, height: 50 }}
  name={'BallPulse'} // Optional: see list of animations below
  size={50} // Required on iOS
  color={'red'} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
/> */}


 </View>
  )
}

export default AppLoader

const styles = StyleSheet.create({})