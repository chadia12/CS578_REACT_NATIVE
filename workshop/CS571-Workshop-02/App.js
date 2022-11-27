import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import Constants from 'expo-constants';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Workshop 02</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
