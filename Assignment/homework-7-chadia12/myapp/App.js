
import { StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from "react-native-vector-icons";

import Quotes from './component/Quotes';
import PicOfTheDay from './component/PicOfTheDay';
import About from "./component/About"

const Home = () =>{
  const Stack = createNativeStackNavigator();
  return(
    <Stack.Navigator>
<Stack.Screen name="quotes" component ={Quotes} />
<Stack.Screen name="pictureOfTheDay" component ={PicOfTheDay} />
    </Stack.Navigator>
  )
}

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>

     <NavigationContainer>
<Tab.Navigator
 screenOptions={{
  headerShown: false,
  gestureEnabled: true,
  tabBarActiveTintColor: "#411d63",
  tabBarInactiveTintColor: "white",
  gestureDirection: "horizontal",
  tabBarStyle: {
    backgroundColor: "#215dc8",
  },
}}
>
<Tab.Screen 
name="Home" 
component={Home}
options ={{
  title:"services",
  headerShown: false,
  tabBarIcon: ({color}) => (
<MaterialCommunityIcons name="home" color={color} size={26}/>
  ) 
}} 
/>
<Tab.Screen 
name="About" 
component={About}
options ={{
  title:"About",
  headerShown: false,
  tabBarIcon: ({color}) => (
    <MaterialCommunityIcons name="account" color={color} size={26} />
  )
}}
/>

</Tab.Navigator>
     </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight
  
  },
});
