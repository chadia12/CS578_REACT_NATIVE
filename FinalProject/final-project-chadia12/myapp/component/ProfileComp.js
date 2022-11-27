import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

export default function ProfileComp() {
  const [userInfo, setUserInfo] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();

  const getUser = async () => {
    const token = await AsyncStorage.getItem("@MY_USER");
    const id = await AsyncStorage.getItem("@USER");
    const response = await fetch(
      `http://localhost:3000/restaurants/owners/${id}`,
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
    setUserInfo(result.data);
    // console.log(result.data);
    // console.log(userInfo.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (route.params && route.params.reload) {
      getUser();
    }
  }, [route.params]);

  function handleEditProfile() {
    navigation.navigate("editUser", { user: userInfo });
  }

  const onLogout = async () => {
    AsyncStorage.clear();
    navigation.navigate("logIn");
  };
  return (
    <View style={styles.root}>
      <Image
        source={require("../assets/one2.png")}
        style={{ width: 400, height: 200 }}
      />
      <View style={styles.imageProf}>
        <Image
          source={require("../assets/profile.jpg")}
          style={{ width: 90, height: 90, borderRadius: 5 }}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginTop: -30,
          marginBottom: 10,
        }}
      >
        {userInfo && userInfo.fullname}
      </Text>
      <TouchableOpacity
        style={styles.profileButton}
        onPress={handleEditProfile}
      >
        <Text style={styles.profileButtonText}>Edit Profile </Text>
      </TouchableOpacity>
      <View style={styles.inputProfile}>
        <Text style={styles.textProfile}>{userInfo && userInfo.email}</Text>
        <MaterialCommunityIcons name="email" color={"#616748"} size={30} />
      </View>
      <View style={styles.inputProfile}>
        <Text style={styles.textProfile}>{userInfo && userInfo.phone}</Text>
        <MaterialCommunityIcons
          name="cellphone-dock"
          color={"#616748"}
          size={30}
        />
      </View>
      <View style={styles.inputProfile}>
        <Text style={styles.textProfile}>{userInfo && userInfo.address}</Text>
        <MaterialCommunityIcons name="pin" color={"#616748"} size={30} />
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
        <Text style={styles.logoutButtonText}>Logout </Text>
      </TouchableOpacity>
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
  imageProf: {
    width: 100,
    height: 100,
    borderColor: "#616748",
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "breen",
    position: "relative",
    bottom: 60,
  },

  textHeader: {
    fontSize: 25,
    color: "#444",
    textAlign: "center",
    margin: 20,
  },
  logoutButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "#616748",
    borderWidth: 1,
    backgroundColor: "#616748",
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 100,
  },
  logoutButtonText: {
    fontSize: 17,
    color: "#ffffff",
    textAlign: "center",
  },

  profileButton: {
    marginBottom: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "#616748",
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 100,
  },
  profileButtonText: {
    fontSize: 17,
    color: "#616748",
    textAlign: "center",
  },
  inputProfile: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    borderTopColor: "#616748",
    borderTopWidth: 1,
    paddingTop: 8,
  },
  textProfile: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
