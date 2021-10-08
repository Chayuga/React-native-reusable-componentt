import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import contacts from "../Constants/contacts";
import { Feather } from "@expo/vector-icons";
import Card from "./Card";

const ContactList = () => {
  return (
    // We add the data props, and return the contacts
    // Pass keyExtractor prop as contact.name
    // Then we pass contact as contact.name
    // Then we pass renderItem prop where we destructure the item and return compoments to be displayed on the screen.

    <FlatList
      data={contacts}
      keyExtractor={(contact) => contact.name}
      renderItem={({ item }) => <Card item={item} />}
    />
  );
};

export default ContactList;
