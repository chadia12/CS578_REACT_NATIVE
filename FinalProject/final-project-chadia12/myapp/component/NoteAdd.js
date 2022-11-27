import { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function NoteAdd() {
  const naviagation = useNavigation();
  const [userNote, setUserNote] = useState({
    header: "",
    comment: "",
  });

  const handleAddNote = async () => {
    const token = await AsyncStorage.getItem("@MY_USER");
    const id = await AsyncStorage.getItem("@USER");
    await fetch(`http://localhost:3000/restaurants/owners/${id}/notes`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "bearer " + token,
      },
      body: JSON.stringify(userNote),
    });
    naviagation.navigate("noteList", { reload: true });
  };
  return (
    <View style={styles.root}>
      <Text style={styles.titleNote}>Add Daily Note</Text>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/one2.png")}
          style={{ width: 389, height: 200, }}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Header"
        value={userNote.header}
        onChangeText={(text) => setUserNote({ ...userNote, header: text })}
      />

      <TextInput
        style={[styles.input, { height: 120 }]}
        placeholder="comment"
        value={userNote.comment}
        onChangeText={(text) => setUserNote({ ...userNote, comment: text })}
      />

      <TouchableOpacity style={styles.registerButton} onPress={handleAddNote}>
        <Text style={styles.registerButtonText}>Save </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  input: {
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 3,
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
  loginText: {
    fontSize: 18,
    textAlign: "center",
    color: "#82A43A",
  },
  titleNote: {
    fontSize: 25,
    color: "#444",
    textAlign: "center",
    margin: 20,
  },
});
