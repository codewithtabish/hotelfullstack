import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import { Image } from 'react-native'
// import { ronaldo } from '../../data/malls'
import { useNavigation } from '@react-navigation/native'


const OnBoardScreen = () => {
    const navi=useNavigation()
    const CustomDot=({selected})=>{
        return (
            <View style={selected?{borderColor:"orange",borderWidth:1,
            padding:4,
            width:16,height:16,borderRadius:10,
            flexDirection:"row",
            justifyContent:"center",
            marginHorizontal:4,
            alignItems:"center"}:{
                width:16,height:16,borderRadius:10,
                flexDirection:"row",
            justifyContent:"center",
            marginHorizontal:5,
            alignItems:"center"
            }}>
                <View style={selected?{backgroundColor:"indigo",
                width:12,height:12,borderRadius:8}:{backgroundColor:"#ccc",width:12,height:12,borderRadius:8}}>

                </View>
            </View>
        )
    }
    const SkipBtn=({skipLabel})=>{
        return null
      

    }
    const NextBtn=({nextLabel})=>{
        return null
 

    }
    const DoneBtn=()=>{
        return (
            <TouchableOpacity
            onPress={()=>navi?.replace('Login')}
            style={{marginHorizontal:14,backgroundColor:"#FF8C00",padding:12,
            borderRadius:6,
            paddingHorizontal:20}}>
                <Text style={{
                    color:"white",
                    fontStyle:"italic"
                }}>let`s Start</Text>
            </TouchableOpacity>
        )
    }
  return (
 <Onboarding
 onSkip={()=>navi.replace('login')}
 onDone={()=>navi.navigate('login')}
 DotComponent={CustomDot}
 SkipButtonComponent={SkipBtn}
 NextButtonComponent={NextBtn}
 DoneButtonComponent={DoneBtn}
 bottomBarColor='white'
 transitionAnimationDuration="10000"
//  bottomBarHeight={{height:130}}
  pages={[
    {
      backgroundColor: 'white',
      image: <Image source={require('../../../assets/music/one.jpg')}
      style={{width:'100%',height:'70%',
      resizeMode:"contain"}} />,
      title: <Text style={{position:"absolute",
      top:"60%",
      fontStyle:"italic",
      fontSize:28,fontWeight:"bold",
      left:50,
      width:"90%",
      color:"indigo"
      }}>Play The Best</Text>,
      subtitle: <Text style={{position:"absolute",
      top:"68%",
      fontStyle:"italic",
      color:"#ccc",
      width:"60%",
      textAlign:"center",
      fontSize:13,
      }}>'Done with React Native Onboarding Swiper
      Done with React Native Onboarding Swiper'</Text>,
    //   nextLabel:<Text>Yes</Text>
    },
    {
      backgroundColor: 'white',
      image: <Image source={require('../../../assets/music/two.jpg')}
      style={{width:'100%',height:'70%',
      resizeMode:"contain"}} />,
      title: <Text
      style={{position:"absolute",
      top:"60%",
      fontStyle:"italic",
      fontSize:28,fontWeight:"bold",
      left:50,
      width:"90%",
      color:"indigo"
      }}
      >Watch With No Ads</Text>,
      subtitle: <Text style={{position:"absolute",
      top:"68%",
      fontStyle:"italic",
      color:"#ccc",
      width:"60%",
      textAlign:"center",
      fontSize:13,
      }}>'Done with React Native Onboarding Swiper
      Done with React Native Onboarding Swiper'</Text>,
    },
    {
      backgroundColor: 'white',
      image: <Image source={require('../../../assets/music/three.jpg')}
      style={{width:'100%',height:'70%',
      resizeMode:"contain"}} />,
      title: <Text style={{position:"absolute",
      top:"60%",
      fontStyle:"italic",
      fontSize:28,fontWeight:"bold",
      left:50,
      width:"90%",
      color:"indigo"
      }}>Share Your Playlist</Text>,
      subtitle: <Text style={{position:"absolute",
      top:"68%",
      fontStyle:"italic",
      color:"#ccc",
      width:"60%",
      textAlign:"center",
      fontSize:13,
      }}>'Done with React Native Onboarding Swiper
      Done with React Native Onboarding Swiper'</Text>,
    },


  ]}
/>
  )
}

export default OnBoardScreen

const styles = StyleSheet.create({})