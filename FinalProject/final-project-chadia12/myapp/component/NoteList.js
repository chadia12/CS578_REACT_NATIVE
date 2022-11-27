import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import Note from "./Note";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function NoteList() {
  const navigation = useNavigation();
  const route = useRoute();
  const [notes, setNotes] = useState([]);

  const getAllNotes = async () => {
    const token = await AsyncStorage.getItem("@MY_USER");
    const id = await AsyncStorage.getItem("@USER");
    const response = await fetch(
      `http://localhost:3000/restaurants/owners/${id}/notes`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "bearer " + token,
        },
      }
    );
    const result = await response.json();
    setNotes(result && result.data.notes);
  };
  useEffect(() => {
    getAllNotes();
  }, []);

  useEffect(() => {
    if (route.params && route.params.reload) {
      getAllNotes();
    }
  }, [route.params]);

  function onAddNote() {
    navigation.navigate("addNote");
  }

  return (
    <View style={styles.root}>
      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <Image
          source={require("../assets/one2.png")}
          style={{ width: 389, height: 200,}}
        />
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={onAddNote}>
        <Text style={styles.registerButtonText}>Add Note </Text>
      </TouchableOpacity>
      <ScrollView>
        {notes && notes.map((elem) => <Note key={elem._id} noteData={elem} />)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    
  },

  registerButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#78866A",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 100,
  },
  registerButtonText: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
  },
});
