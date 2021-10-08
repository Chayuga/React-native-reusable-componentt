import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

// We are no longer using FlatList, so we remove it.
const Card = ({ item }) => {
  //Instead of saying: const item=item.props, we destructure it in the function above.
  return (
    <View style={styles.containerCard}>
      <Feather name="user" size={38} color="#1B1C2A" style={styles.icon} />
      <View style={styles.containerDetails}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactNumber}>{item.contact}</Text>
      </View>
    </View>
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

export default Card;
