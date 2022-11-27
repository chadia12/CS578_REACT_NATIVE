import { useContext, useState } from "react";
import { View, TextInput, StyleSheet, Button, Alert } from "react-native";
import uuid from "react-native-uuid";
import GlobalContext from "./GlobalContext";

export default function AddContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { data, setData } = useContext(GlobalContext);

  function handleAdd() {
    data.push({ name, phone, id: uuid.v1() });
    setData([...data]);

    Alert.alert("contact information is saved");
  }

  return (
    <View
      style={{
        flex: 0.2,
        backgroundColor: "aliceblue",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 30,
      }}
    >
      <TextInput
        style={styles.input}
        placeholder="name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="phone"
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
      <View style={{ margin: 20 }}>
        <Button title="Save" onPress={handleAdd} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
