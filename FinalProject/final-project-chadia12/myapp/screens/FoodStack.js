import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddFood from '../component/AddFood';
import FoodsList from '../component/FoodsList';
import FoodDetails from '../component/FoodDetails';
import FoodEdit from '../component/FoodEdit'

export default function FoodStack(){
    const Stack = createNativeStackNavigator(); 
    return(
<Stack.Navigator>
    <Stack.Screen name="foodList" component={FoodsList} />
    <Stack.Screen name="foodDetails" component={FoodDetails} />
    <Stack.Screen name="addFood" component={AddFood} />
    <Stack.Screen name="editFood" component={FoodEdit} />
</Stack.Navigator>
    )

}