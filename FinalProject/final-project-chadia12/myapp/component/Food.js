import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Food({ data }) {
  const { _id, name, origin, price, image, date } = data;

  const navigation = useNavigation();

  function handleDetails() {
    navigation.navigate("foodDetails", { food: data });
  }

  function onEdit() {
    navigation.navigate("editFood", { food: data });
  }

  const handleDelete = async () => {
    const token = await AsyncStorage.getItem("@MY_USER");
    const id = await AsyncStorage.getItem("@USER");
    await fetch(`http://localhost:3000/restaurants/owners/${id}/foods/${_id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "bearer " + token,
      },
    });
    navigation.navigate("foodList", { reload: true });
  };

  return (
    <View style={{ backgroundColor: "#F3F3F7" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontWeight: "bold" }}>{name}</Text>
          <View
            style={{
              flexDirection: "row",
              width: "72%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>${price}</Text>
            <TouchableHighlight
              onPress={handleDetails}
              style={styles.button}
              underlayColor="#5398DC"
            >
              <Text style={styles.buttonText}>View</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={onEdit}
              style={styles.button}
              underlayColor="#5398DC"
            >
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={handleDelete}
              style={styles.button}
              underlayColor="#5398DC"
            >
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{ marginLeft: -40 }}>
          <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#616748",
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#fff",
  },
  buttonText: {
    color: "#616748",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },
});
