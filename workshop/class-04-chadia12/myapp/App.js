import 'react-native-gesture-handler';
import {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useEffect } from 'react';

function Home({ navigation }) {
  const moveToAbout = () => {
    navigation.navigate('about', {names: ['Mike', 'John']});
  }
  const moveToContact = () => {
    navigation.navigate('contact');
  }
  
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Move to About" onPress={moveToAbout}></Button>
      <Button title="Move to Contact" onPress={moveToContact}></Button>
    </View>

  )
}

function About({ navigation, route }) {
  const moveToHome = () => {
    navigation.navigate('home');
  }
  useEffect(() => {
    navigation.setOptions({title: 'ABOUT'} )
    console.log(route.params)
  }, [])
  return (
    <View>
      <Text>About</Text>
      <Button title="Move to Home" onPress={moveToHome}></Button>
    </View>

  )
}

function Contact({navigation}) {
  const moveToAbout = () => {
    navigation.navigate('about');
  }
  return (
    <View>
      <Text>Contact</Text>
      <Button title="Move to About" onPress={moveToAbout}></Button>
    </View>

  )
}

//const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name={'home'} component={Home}/>
        <Stack.Screen name={'about'} component={About} />
        <Stack.Screen name={'contact'} component={Contact} />
      </Stack.Navigator> */}
      <Drawer.Navigator initialRouteName='home'>
        <Drawer.Screen name={'home'} component={Home}/>
        <Drawer.Screen name={'about'} component={About} />
        <Drawer.Screen name={'contact'} component={Contact} />
      </Drawer.Navigator> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
