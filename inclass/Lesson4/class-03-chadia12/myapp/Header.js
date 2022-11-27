import { View, Text } from "react-native";
export default function Header() {
  return (
    <View style={{ backgroundColor: "red", width: "100%", flex: 1 }}>
      <Text style={{ color: "white", textAlign: "center" }}>
        Counter Header
      </Text>
    </View>
  );
}
