import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { s } from "react-native-size-matters";
import BackArrowIcon from "../assets/BackArrowIcon";

const BackButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <BackArrowIcon />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECF0F4",
    width: s(32),
    height: s(32),
    borderRadius: s(16),
    justifyContent: "center",
    alignItems: "center",
  },
});
