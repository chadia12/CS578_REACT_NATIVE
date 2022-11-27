import { useRoute } from "@react-navigation/native";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ImageBackground,Image
} from "react-native";

export default function NotesDetails() {
  const route = useRoute();
  const { note } = route.params;

  return (
    <View style={styles.root}>
      <Image
          source={require("../assets/one2.png")}
          style={{ width: 389, height: 200, }}
        />
      <Text style={styles.titleNote}>Note</Text>

      <View
        style={{
          width: "95%",
          borderRadius: 20,
          marginLeft: 10,
          borderWidth: 1,
          borderColor: "#616748",
        }}
      >
        <View
          style={{
            backgroundColor: "#616748",
            padding: 5,
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
          }}
        >
          <Text style={[styles.textNote, { fontSize: 25 }]}>{note.header}</Text>
          <Text style={styles.textNote}>{note.date}</Text>
        </View>

        <ImageBackground
          source={require("../assets/note.jpg")}
          style={{ width: "100%" }}
        >
          <Text style={styles.comment}>{note.comment}</Text>
        </ImageBackground>
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
  titleNote: {
    fontSize: 25,
    color: "#444",
    textAlign: "center",
    margin: 20,
  },
  textNote: {
    fontSize: 17,
    fontWeight: "book",
    marginLeft: 10,
    color: "#fff",
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
  comment: {
    paddingTop: 10,
    fontSize: 15,
    marginLeft: 5,
    fontWeight: "book",
    lineHeight: 38,
  },
});
