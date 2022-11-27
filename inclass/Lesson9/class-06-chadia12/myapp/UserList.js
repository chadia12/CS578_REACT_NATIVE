import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function UserList({ token }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getAllUses = async () => {
      try {
        const response = await fetch("http://localhost:3000/users", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "bearer " + token,
          },
        });
        const result = await response.json();
        setUsers(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllUses();
  }, []);
  return (
    <View style={styles.root}>
      <Text style={styles.textHeader}>User List</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Text style={styles.text}>{item.username}</Text>
        )}
        keyExtracor={(item) => item._id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  textHeader: {
    fontSize: 25,
    color: "#444",
    textAlign: "center",
    margin: 20,
  },
  text: {
    fontSize: 14,
    color: "#444",
    marginTop: 20,
    marginLeft: 50,
  },
});
