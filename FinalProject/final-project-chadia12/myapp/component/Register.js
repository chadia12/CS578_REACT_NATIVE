import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
} from "react-native";

export default function Register() {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const onLogin = () => {
    navigation.navigate("login");
  };

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const result = await response.json();
      navigation.navigate("logIn");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
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
        value={userInfo.email}
        onChangeText={(text) => setUserInfo({ ...userInfo, email: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
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
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Sign Up </Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "#616748" }} />
        <View>
          <Text style={{ width: 30, textAlign: "center" }}>or</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "#616748" }} />
      </View>
      <Text style={styles.loginText} onPress={onLogin}>
        Login
      </Text>
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
