
import { createContext, useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './component/Login';
import Register from './component/Register'
import HomeTab from './screens/HomeTab';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [token, setToken] = useState(null);
  const Stack = createNativeStackNavigator(); 

  useEffect (() =>{
    const getToken = async () =>{
      try{
const user = await AsyncStorage.getItem('@MY_USER');
if(user){
  setToken(user); 
}
      }catch(err){
        console.log(err);
      }
    };
    getToken()
  })

  

  return (
    
      <NavigationContainer>
        <Stack.Navigator>
        {token ?  <Stack.Screen name="home" component={HomeTab} options={{headerShown: false}} />:
        <Stack.Screen name="login" component={Login} />
        }
        <Stack.Screen name="singup" component={Register}  options={{headerShown: false}} />
        <Stack.Screen name="logIn" component={Login}  options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeTab} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
     
    
  );
}


