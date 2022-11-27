import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import FoodStack from './FoodStack'
import DailyNoteStack from './DailyNoteStack';
import ProfileStack from './ProfileStack';


function HomeTab(){
    const Tab = createBottomTabNavigator();
return(
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      tabBarActiveTintColor: "#411d63",
      tabBarInactiveTintColor: "white",
      gestureDirection: "horizontal",
      tabBarStyle: {
        backgroundColor: "#616748",
      },
    }}
  >
    <Tab.Screen
      name="food"
      component={FoodStack}
      options={{
        title: "Foods",
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="food-outline" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="daily Note"
      component={DailyNoteStack}
      options={{
        title: "Daily Note",
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="note-text"
            color={color}
            size={26}
          />
        ),
      }}
    />

<Tab.Screen
      name="user"
      component={ProfileStack}
      options={{
        title: "Profile",
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="card-account-details"
            color={color}
            size={26}
          />
        ),
      }}
    />


  </Tab.Navigator>
)
   
}




export default HomeTab;