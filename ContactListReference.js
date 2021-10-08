import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import contacts from "./Constants/contacts";
import { Feather } from "@expo/vector-icons";

const ContactList = () => {
  return (
    // We add the data props, and return the contacts
    // Pass keyExtractor prop as contact.name
    // Then we pass contact as contact.name
    // Then we pass renderItem prop where we destructure the item and return compoments to be displayed on the screen.

    <FlatList
      data={contacts}
      keyExtractor={(contact) => contact.name}
      renderItem={({ item }) => {
        //We will need vector icons for profile icon, because we are doing a contact list component: expo/vector-icons
        return (
          <View style={styles.containerCard}>
            <Feather
              name="user"
              size={38}
              color="#1B1C2A"
              style={styles.icon}
            />
            <View style={styles.containerDetails}>
              <Text style={styles.contactName}>{item.name}</Text>
              <Text style={styles.contactNumber}>{item.contact}</Text>
            </View>
          </View>
        );
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    flexDirection: "row",
    padding: 7,
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.8)",
    borderColor: "blue",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
  },
  icon: {
    padding: 10,
  },
  containerDetails: {
    flex: 1,
    padding: 5,
  },
  contactName: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#1B1C2A",
  },
  contactNumber: {
    color: "#1B1C2A",
  },
});

export default ContactList;
