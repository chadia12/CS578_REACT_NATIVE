import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import CoursesList from "./components/CoursesList";
import CourseDetails from "./components/CourseDetails";
import AddReview from "./components/AddReview";
import About from "./components/About";
import AddCourse from "./components/AddCourse";
import EditCourse from "./components/EditCourse";

const StackComp = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="courseList" component={CoursesList} />
      <Stack.Screen name="courseDetails" component={CourseDetails} />
      <Stack.Screen name="addReview" component={AddReview} />
      <Stack.Screen name="addCourse" component={AddCourse} />
      <Stack.Screen name="editCourse" component={EditCourse} />
    </Stack.Navigator>
  );
};

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
            component={StackComp}
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
