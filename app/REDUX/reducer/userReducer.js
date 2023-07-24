import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
let id;
const checkUserID=async()=>{
id=  await AsyncStorage.getItem("userID")
}
console.log('The idss is ',id)
checkUserID()

// AsyncStorage.removeItem("authID")

const userSlice=createSlice({
    name:"user",
    initialState:{
        isLogin:AsyncStorage.getItem("userID")
    },
    reducers:{
        changeUserAuthStateReducer:(state,action)=>{
            state.isLogin=action.payload
        }
    }
})
export const {changeUserAuthStateReducer}=userSlice.actions

export default userSlice.reducer