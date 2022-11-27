import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "./Login";
import UserList from "./UserList";
import { useEffect, useState } from "react";
export default function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await AsyncStorage.getItem("@USER");
        if (data) {
          setToken(data);
        }
      } catch (err) {}
    };
    getUser();
  }, []);
  return (
    <View style={styles.container}>
      {token ? <UserList token={token} /> : <Login />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
