import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileComp from "../component/ProfileComp";
import EditUser from '../component/EditUser'

export default function ProfileStack(){
    const Stack = createNativeStackNavigator(); 
    return(
<Stack.Navigator>
    <Stack.Screen name="profile" component={ProfileComp} />
    <Stack.Screen name="editUser" component={EditUser} />
</Stack.Navigator>
    )

}