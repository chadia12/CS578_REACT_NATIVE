import { View, Text, StyleSheet, Image } from "react-native";
import Hobby from "./Hobby";

export default function About() {
  return (
    <View style = {{ flex: 1, padding: 40 }}>
      <Text style = {styles.header}>About Me</Text>
      <View style = {{ alignItems: "center", marginTop: 8 }}>
        <Image
          source = {require("../assets/mea.png")}
          style = {{ width: 100, height: 100 }}
        />
      </View>

      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </Text>
      <Text style ={[styles.text, { fontSize: 15 }]}>My Hobbies</Text>
      <Hobby />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 30,
  },
  icon: {
    marginVertical: 20,
    alignSelf: "center",
  },
  text: {
    fontSize: 14,
    color: "#444",
    marginTop: 20,
  },
});
