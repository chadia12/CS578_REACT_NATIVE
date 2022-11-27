import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";

import Food from "./Food";

export default function FoodsList() {
  const naviagation = useNavigation();
  const [search, setSearch] = useState("");
  const [copyData, setCopyData] = useState([]);
  const [data, setData] = useState([]);
  const route = useRoute();

  const getAllFoods = async () => {
    try {
      const token = await AsyncStorage.getItem("@MY_USER");
      const id = await AsyncStorage.getItem("@USER");
      const response = await fetch(
        `http://localhost:3000/restaurants/owners/${id}/foods`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "bearer " + token,
          },
        }
      );
      const result = await response.json();
      setData(result && result.data.foods);
      setCopyData(result && result.data.foods);
    } catch (err) {}
  };

  useEffect(() => {
    getAllFoods();
  }, []);

  useEffect(() => {
    if (route.params && route.params.reload) {
      getAllFoods();
    }
  }, [route.params]);

  function handleSearch(text) {
    const result = data.filter((food) =>
      food.name.toLowerCase().includes(text.toLowerCase())
    );
    setCopyData(result);
    setSearch(text);
  }
  function handleAdd() {
    naviagation.navigate("addFood");
  }

  return (
    <View style={styles.root}>
      <Image
        source={require("../assets/one2.png")}
        style={{ width: 400, height: 130 }}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addButtonText}>Add Food </Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Live Search"
        value={search}
        onChangeText={handleSearch}
      />
      <View style={{ width: "100%", marginLeft: 10 }}>
        {/* <ScrollView>
            {copyData && copyData.map((elem)=> <Food key={elem._id} data={elem}/>)}
          </ScrollView> */}
        <FlatList
          data={copyData}
          renderItem={({ item }) => <Food data={item} />}
          keyExtractor={item => item._id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
  },
  input: {
    padding: 10,
    paddingHorizontal: 150,
    fontSize: 16,
    color: "#444",
    borderBottomWidth: 1,
    borderColor: "#616748",
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
  },
  addButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#616748",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 100,
  },
  addButtonText: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
  },
});
