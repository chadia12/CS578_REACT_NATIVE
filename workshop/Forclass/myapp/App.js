import React from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import Constants from "expo-constants";
import {NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import About from "./components/About";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import CompStack from "./CompStack";

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
            component={CompStack}
            options={{
              title: "Courses",
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="About us"
            component={About}
            options={{
              title: "About us",
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={26}
                />
              ),
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
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
});
