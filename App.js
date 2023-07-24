import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppProvider from './app/Navigation/AppProvider';
import { chnageOnBoaredStateReducer } from './app/REDUX/reducer/appReducer';
import { Provider, useDispatch } from 'react-redux';
import { store } from './app/REDUX/store';

export default function App() {
  // const dispatch=useDispatch()
  // const checkOnBoardAvalibilit=()=>{
  //   dispatch(chnageOnBoaredStateReducer(onBoard))

  // }
  // useEffect(() => {
  //  checkOnBoardAvalibilit()
  // }, [])
  
 
  return (
    <Provider store={store}>
      <AppProvider/>

    </Provider>
  );
}


