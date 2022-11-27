import { useRoute } from "@react-navigation/native";
import { View, Text, Image, StyleSheet } from "react-native";

export default function FoodDetails() {
  const route = useRoute();
  const { food } = route.params;
  return (
    <View style={styles.root}>
      <Text style={styles.textDetail}>Food Details</Text>
      <View style={{ alignItems: "center" }}>
        <Image
          source={{ uri: food.image }}
          style={{ width: 370, height: 300, borderRadius: 10 }}
        />
      </View>
      <View style={styles.textFood}>
        <Text style={styles.detailText}>{food.name}</Text>
        <Text style={styles.detailText}>{food.origin}</Text>
        <Text style={styles.detailText}>${food.price}</Text>
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
  textDetail: {
    fontSize: 25,
    color: "#444",
    textAlign: "center",
    margin: 20,
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  textFood: {
    marginLeft: 20,
  },
  detailText: {
    fontSize: 17,
    fontWeight: "semibold",
    paddingTop: 10,
    textAlign: "center",
  },
});
