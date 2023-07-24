import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

let onBoardValue=""
const checkOnBoardAvalibilit=async()=>{
    // await AsyncStorage.removeItem("onBoard")
  onBoardValue=  AsyncStorage.getItem("onBoard")

}
checkOnBoardAvalibilit()

const appSlice=createSlice({
    name:"app",
    initialState:{
        appLoader:false,
        onBoardScreen:AsyncStorage.getItem("onBoard")
    },
    reducers:{
        changeAppLoaderState:(state,action)=>{
            state.appLoader=action.payload
        },
        chnageOnBoaredStateReducer:(state,action)=>{
            state.onBoardScreen=action.payload
        }
    }
})

export const {changeAppLoaderState,chnageOnBoaredStateReducer}=appSlice.actions
export default appSlice.reducer