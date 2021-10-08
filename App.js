import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import ContactList from "./Components/ContactList";

export default function App() {
  return (
    <View style={styles.container}>
      <ContactList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B1C2A",
  },
});
