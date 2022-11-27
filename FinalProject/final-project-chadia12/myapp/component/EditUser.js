import { useNavigation, useRoute } from "@react-navigation/native";
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

export default function EdiUser() {
  const route = useRoute();
  const naviagation = useNavigation();
  const { user } = route.params;
  const [userInfo, setUserInfo] = useState(user);

  const handleEditUser = async () => {
    const token = await AsyncStorage.getItem("@MY_USER");
    const id = await AsyncStorage.getItem("@USER");
    await fetch(`http://localhost:3000/restaurants/owners/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "bearer " + token,
      },
      body: JSON.stringify(userInfo),
    });
    naviagation.navigate("profile", { reload: true });
  };
  return (
    <View style={styles.root}>
      <Image
        source={require("../assets/one2.png")}
        style={{ width: 400, height: 200 }}
      />

      <TextInput
        style={styles.input}
        placeholder="Fullname"
        value={userInfo.fullname}
        onChangeText={(text) => setUserInfo({ ...userInfo, fullname: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="email"
        editable={false}
        value={userInfo.email}
        onChangeText={(text) => setUserInfo({ ...userInfo, email: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        editable={false}
        secureTextEntry={true}
        value={userInfo.password}
        onChangeText={(text) => setUserInfo({ ...userInfo, password: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={userInfo.phone}
        onChangeText={(text) => setUserInfo({ ...userInfo, phone: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={userInfo.address}
        onChangeText={(text) => setUserInfo({ ...userInfo, address: text })}
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleEditUser}>
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
  textHeader: {
    fontSize: 25,
    color: "#444",
    textAlign: "center",
    margin: 20,
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
    backgroundColor: "#616748",
    borderRadius: 4,
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
});
