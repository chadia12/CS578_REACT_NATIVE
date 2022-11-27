import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "./Header";
import Counter from "./Counter";
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Counter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    width: "400px",
  },
});
