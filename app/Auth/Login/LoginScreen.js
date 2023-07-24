import { Dimensions, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Toast } from 'toastify-react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserAuthStateReducer } from '../../REDUX/reducer/userReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { changeAppLoaderState } from '../../REDUX/reducer/appReducer';
import AppLoader from '../../component/AppLoader';

const LoginScreen = () => {
    const navi=useNavigation()
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const {height,width}=Dimensions.get('window')
    const eightPercentHeight=(85/100)*height
    const dispatch=useDispatch()
    const {appLoader}=useSelector((state)=>state.app)
    const {isLogin}=useSelector((state)=>state.user)
    // alert(isLogin)

    const handleLogin = async () => {
        if ( !email || !password) {
          return Toast.warn("please fill all the fields");
        }
        const myResponse = await fetch("http://192.168.187.53:4000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
        const lastResponse = await myResponse?.json();

        if (lastResponse?.message === "user syntax error") {
            Toast.error(lastResponse?.errors[0]?.msg);
            return
         }



         dispatch(changeAppLoaderState(true))


        setTimeout(async() => {
          if (lastResponse.message === "login Successfully") {
          Toast.success(" login Successfully ....");
          setEmail("")
          setPassword("")
          await AsyncStorage.setItem("userID",lastResponse?.user._id)
          dispatch(changeAppLoaderState(false))
         dispatch(changeUserAuthStateReducer(lastResponse?.user._id));
         return
    
          }
          if (lastResponse.message === "Invalid credentials") {
            Toast.warn("Invalid credentials");
            dispatch(changeAppLoaderState(false))
            // setObj({ email: "", password: "" });
            return;
          }
      
            
        }, 4000);
  
      };
    

    const handleRegisterGo=()=>{
        navi.navigate("SignUp")

    }

    return (
        <View style={{ position:"relative",
        flex:1}}>
        <View style={{flex:1,
        position:"relative",
        paddingHorizontal:0,paddingVertical:20,flexDirection:"row",
        justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
        <View style={{height:eightPercentHeight,
        width:"85%",flexDirection:"column",justifyContent:"center",
        alignItems:"center"}}>
        <Image source={require('../../../assets/images/logotwo.jpg')}
        style={{height:'30%',width:200,resizeMode:"cover"}} />
        <View style={{flexDirection:"column",gap:10,width:"100%"}}>
      
        <TextInput style={{width:"100%",borderWidth:1,
        borderColor:"gray",padding:10,borderRadius:10}}
          placeholder='Email'
          inputMode='email'
          value={email}
          onChangeText={(e)=>setEmail(e)}
          name='email'
    
        />
        <TextInput style={{width:"100%",borderWidth:1,
        borderColor:"gray",padding:10,borderRadius:10}}
          placeholder='password'
          value={password}
          onChangeText={(e)=>setPassword(e)}
          name='password'
    
        />
        <View style={{flexDirection:"row",
        justifyContent:"center",marginTop:10}}>
        <TouchableOpacity style={{backgroundColor:"indigo",padding:10,
        borderRadius:10,width:"70%",marginHorizontal:"auto",
        paddingVertical:12,
        display:"flex"}}
        activeOpacity={.6}
        onPress={handleLogin}
        >
          <Text style={{color:"white",textAlign:"center"}}>login</Text>
        </TouchableOpacity>
        </View>
        <Text style={{color:"gray",textAlign:"center"}}>or</Text>
        {/* Social View */}
        <View style={{flexDirection:"row",
        gap:10,marginTop:10}}>
        <TouchableOpacity style={{flexDirection:"row",
        gap:10,alignItems:"center",
        padding:8,
        borderRadius:8,
        backgroundColor:"#D3D3D3",flex:1}}>
        <AntDesign name="googleplus" size={24} color="green" />
        <Text style={{color:"white",marginLeft:10}}>Google</Text>
    
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:"row",
        gap:10,alignItems:"center",
        padding:8,
        borderRadius:8,
        backgroundColor:"#D3D3D3",flex:1}}>
        <Feather name="facebook" size={24} color="blue" />
        <Text style={{color:"white",marginLeft:10}}>Facebook</Text>
    
        </TouchableOpacity>
    
    
        </View>
        <View style={{flexDirection:"row",
        justifyContent:"flex-end",alignItems:"center",
        gap:10,marginTop:10}}>
          <Text style={{color:"gray",fontSize:13,
          fontStyle:"italic"}}>Don`t have An Account ?</Text>
          <Text style={{color:"indigo",
          fontWeight:"bold"}}
          onPress={handleRegisterGo}
          >Login</Text>
        </View>
    
        </View>
    
        </View>
    
    
        </View>
        {
            appLoader?
                  <AppLoader/>:null
          
        }

        </View>
      )
}

export default LoginScreen

const styles = StyleSheet.create({})