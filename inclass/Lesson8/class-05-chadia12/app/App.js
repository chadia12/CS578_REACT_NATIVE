import React, { useEffect } from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyContacts from './Contacts';
import Compass from './Magnetometer';
import MyLocation from './MyLocation';
import MyImagePicker from './ImagePicker';
import MyCamera from './Camera';


const Stack = createNativeStackNavigator();

const Home = ({navigation}) => {
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Location")}>
        <Text>Location</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Contacts")}>
        <Text>Contacts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Compass")}>
        <Text>Compass</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ImagePicker")}>
        <Text>Image Picker</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Camera")}>
        <Text>Camera</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Location" component={MyLocation}/>
        <Stack.Screen name="Contacts" component={MyContacts}/>
        <Stack.Screen name="Compass" component={Compass}/>
        <Stack.Screen name="ImagePicker" component={MyImagePicker}/>
        <Stack.Screen name="Camera" component={MyCamera}/>
      </Stack.Navigator>
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
  button: {
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 40,
    width: 200,
  }
});

