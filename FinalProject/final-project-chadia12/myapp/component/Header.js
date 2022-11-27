import { View, Text, StyleSheet, Image } from "react-native";
export default function Header() {
  return (
    <View style={{ alignItems: "center", marginTop: 8 }}>
      <Image
        source={require("../assets/one2.png")}
        style={{ width: 400, height: 350 }}
      />
      <Text style={styles.headStyle}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headStyle: {
    paddingTop: 30,
    fontSize: 26,
    textAlign: "center",
    color: "#0066CC",
    fontWeight: "200",
  },
});
