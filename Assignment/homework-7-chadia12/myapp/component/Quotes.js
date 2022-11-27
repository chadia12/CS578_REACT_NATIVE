import { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Quotes() {
  const [quotes, setQuotes] = useState();
  const [refresh, setRefresh] = useState(false);
  const navigation = useNavigation();

  const getQuotes = async () => {
    try {
      const res = await fetch("https://api.kanye.rest");
      const result = await res.json();
      setQuotes(result.quote);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getQuotes();
  }, [refresh]);

  function onQuotes() {
    setRefresh(!refresh);
  }
  function onPicture() {
    navigation.navigate("pictureOfTheDay");
  }

  return (
    <View style={{ flex: 1, padding: 40 }}>
      <Text style={styles.header}>QUOTE OF THE DAY</Text>

      <Text style={styles.text}>{quotes}</Text>
      <View style={{ flex: 2, flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity style={styles.submitButton} onPress={onQuotes}>
          <Text style={styles.submitButtonText}>Refresh</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={onPicture}>
          <Text style={styles.submitButtonText}>Picture Of Day</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 20,
  },

  text: {
    fontSize: 18,
    color: "#444",
    marginTop: 20,
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#0066cc",
    borderRadius: 4,
    marginVertical: 2,
    marginHorizontal: 5,
    height: 50,
  },
  submitButtonText: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
  },
});
