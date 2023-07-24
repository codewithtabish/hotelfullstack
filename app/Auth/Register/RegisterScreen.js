import { Dimensions, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Toast } from 'toastify-react-native'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import AppLoader from '../../component/AppLoader';
import { changeAppLoaderState } from '../../REDUX/reducer/appReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { changeUserAuthStateReducer } from '../../REDUX/reducer/userReducer';

const RegisterScreen = () => {
    const navi=useNavigation()
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const {height,width}=Dimensions.get('window')
    const eightPercentHeight=(85/100)*height

    // REDUX 
    const {appLoader}=useSelector((state)=>state.app)
    const dispatch=useDispatch()

    const handleSignUp=async()=>{
        if (!name|| !email || !password) {
            return Toast.warn("please fill all the fields");
          }
        const firstResponse=await fetch("http://192.168.187.53:4000/api/auth/register",{
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                name:name,
                email:email,
                password:password
            })

        })

        const lastResponse=await firstResponse.json()
        if(lastResponse.message==="user syntax error"){
            return Toast.error(lastResponse.errors[0].msg)
        }
        
        dispatch(changeAppLoaderState(true))
        
       setTimeout(async() => {
        if(lastResponse.message==="user Already exists"){
            dispatch(changeAppLoaderState(false))
            return Toast.warn("user Already exists")
        }
        if(lastResponse.message==="user created Successfully ..."){
        await AsyncStorage.setItem("userID",lastResponse.user._id)
        dispatch(changeAppLoaderState(false))
        dispatch(changeUserAuthStateReducer(lastResponse.user._id))
         Toast.success("Account created Successfully ...")
         return
    }
        
       }, 4000);

        
        
    }
    const handleLoginGo=()=>{
         navi.navigate("Login")
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
          placeholder='Name'
          name='name'
          value={name}
          onChangeText={(e)=>setName(e)}
        />
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
        onPress={handleSignUp}
        >
          <Text style={{color:"white",textAlign:"center"}}>Create</Text>
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
          fontStyle:"italic"}}>Already have An Account ?</Text>
          <Text style={{color:"indigo",
          fontWeight:"bold"}}
          onPress={handleLoginGo}
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

export default RegisterScreen

const styles = StyleSheet.create({})