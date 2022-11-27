import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

export default function Note({ noteData }) {
  const { _id, header, comment, date } = noteData;
  const navigation = useNavigation();

  function handleDetails() {
    navigation.navigate("noteDetails", { note:noteData });
  }
const dates = date.slice(0,10)
  return (
    <View style={{ padding: 10 }}>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{header}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>{ dates}</Text>

          <TouchableHighlight
            onPress={handleDetails}
            style={styles.button}
            underlayColor="#5398DC"
          >
            <Text style={styles.buttonText}>View</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: "#616748",
    borderRadius: 14,
    paddingHorizontal: 30,
    paddingVertical: 4,
    backgroundColor: "#fff",
  },
  buttonText: {
    color: "#616748",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
