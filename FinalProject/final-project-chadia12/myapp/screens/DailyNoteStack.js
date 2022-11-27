import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NoteList from "../component/NoteList";
import NotesDetails from "../component/NotesDetails";
import NoteAdd from "../component/NoteAdd";

export default function DailyNoteStack(){
    const Stack = createNativeStackNavigator(); 
    return(
<Stack.Navigator>
    <Stack.Screen name="noteList" component={NoteList} />
    <Stack.Screen name="noteDetails" component={NotesDetails} />
    <Stack.Screen name="addNote" component={NoteAdd} />
</Stack.Navigator>
    )

}