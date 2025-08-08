import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { PlusIcon } from "../assets/icons";

const AddCardButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <PlusIcon />
      <Text style={styles.text}>Add New</Text>
    </TouchableOpacity>
  );
};

export default AddCardButton;

const styles = StyleSheet.create({
  container: {
    borderColor: "#F0F5FA",
    borderWidth: s(2),
    borderRadius: s(10),
    paddingVertical: vs(15),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: vs(15)
  },
  text: {
    color: "#FF7622",
    fontSize: s(14),
    fontWeight: "bold",
    marginStart: s(10),
  },
});
