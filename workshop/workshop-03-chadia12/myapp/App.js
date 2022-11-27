import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Button } from "react-native";
import AddContactForm from "./AddContactForm";
import { contacts } from "./contacts";
import {  useState } from "react";
import GlobalContext from "./GlobalContext";

export default function App() {
  const [data, setData] = useState(contacts);
  const [isShow, setIshow] = useState(true);
  const [isSorted, setIsStorted] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  function onShowAndHidd() {
    setIshow(!isShow);
    setIsAdd(false);
  }

  function onSortFc(contactData) {
    setIsStorted(true);
    let newContact = [...contactData];
    return newContact.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  function onSorting() {
    if (!isSorted) {
      setData(onSortFc(data));
    } else {
      setData(data.reverse());

      setIsStorted(false);
    }
  }

  function onAddContact() {
    setIsAdd(true);
    setIshow(false);
  }
  return (
    <GlobalContext.Provider value={{ data, setData }}>
      <View style={styles.container}>
        <View
          style={{
            flex: 0.2,
            backgroundColor: "azure",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 20,
          }}
        >
          <Button title="Show/Hidd" onPress={onShowAndHidd} />
          <Button title="Sorting contact" onPress={onSorting} />
          <Button title="Add Contact" onPress={onAddContact} />
        </View>
        {isAdd && <AddContactForm />}

        {data && isShow && (
          <View
            style={{
              flex: 1,
              backgroundColor: "ghostwhite",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30 }}>Contact List</Text>
            <ScrollView>
              {data.map((cts) => {
                return (
                  <Text key={cts.id} style={{ margin: 10 }}>
                    {cts.name} - {cts.phone}
                  </Text>
                );
              })}
            </ScrollView>
          </View>
        )}


        <StatusBar style="auto" />
        
      </View>
    </GlobalContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
