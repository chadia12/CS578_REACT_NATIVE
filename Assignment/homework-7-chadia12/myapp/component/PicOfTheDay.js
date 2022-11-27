import { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function PicOfTheDay() {
  const [picture, setPicture] = useState();
  const [refresh, setRefresh] = useState(false);
  const navigation = useNavigation();

  function getId() {
    const num = Math.floor(Math.random() * 50);
    return num;
  }

  const getPicture = async () => {
    try {
      const res = await fetch(`https://picsum.photos/id/${getId()}/info`);
      const result = await res.json();
      setPicture(result.download_url);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPicture();
  }, [refresh]);

  function onQuotes() {
    navigation.navigate("quotes");
  }
  function onPicture() {
    getId();
    setPicture(!refresh);
  }

  return (
    <View style={{ flex: 1, padding: 40 }}>
      <Text style={styles.header}>PICTURE OF THE DAY</Text>
      <Image source={picture} style={{ width: 300, height: 300 }} />
      <View style={{ flex: 2, flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity style={styles.submitButton} onPress={onQuotes}>
          <Text style={styles.submitButtonText}>Quote of Day</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={onPicture}>
          <Text style={styles.submitButtonText}>Refresh</Text>
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
