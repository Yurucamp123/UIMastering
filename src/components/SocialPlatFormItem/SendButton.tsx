import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { s } from "react-native-size-matters";
import { SendIcon } from "../../assets/icons";

const SendButton = () => {
  return (
    <TouchableOpacity style={styles.circle}>
      <SendIcon />
    </TouchableOpacity>
  );
};

export default SendButton;

const styles = StyleSheet.create({
  circle: {
    height: s(46),
    width: s(46),
    borderRadius: s(23),
    backgroundColor: "#1077AF",
    justifyContent: "center",
    alignItems: "center",
  },
});
