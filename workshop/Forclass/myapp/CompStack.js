
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CourseDetails from "./components/CourseDetails";
import AddReview from "./components/AddReview"
import CoursesList from "./components/CoursesList";

export default function CompStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Course List" component={CoursesList} />
      <Stack.Screen name="Course Details" component={CourseDetails} />
      <Stack.Screen name="Add Review" component={AddReview} />
    </Stack.Navigator>
  );
}