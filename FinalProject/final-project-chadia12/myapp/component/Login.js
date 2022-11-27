import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import Header from "./Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onSignUp = () => {
    navigation.navigate("singup");
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/restaurants/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      if (result.success) {
        await AsyncStorage.setItem("@MY_USER", result.data.token);
        await AsyncStorage.setItem("@USER", result.data.result._id);
        navigation.navigate("Home");
      }
      else{
       navigation.navigate('logIn')
      }
    } catch (error) {}

    
  };


  return (
    <View style={styles.root}>
      <Header />

      <TextInput
        style={styles.input}
        placeholder="email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login </Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "#616748" }} />
        <View>
          <Text style={{ width: 30, textAlign: "center" }}>or</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "#616748" }} />
      </View>
      <Text style={styles.signupText} onPress={onSignUp}>
        Sign Up
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
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 3,
  },
  loginButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#616748",
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  loginButtonText: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
  },
  signupText: {
    fontSize: 18,
    textAlign: "center",
    color: "#82A43A",
  },
});
