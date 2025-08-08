import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { s, vs } from "react-native-size-matters";

interface ButtonStyleListProps {
  label: string;
}

const ButtonStyleList = ({ label }: ButtonStyleListProps) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonStyleList;

const styles = StyleSheet.create({
  button: {
    paddingVertical: vs(12),
    backgroundColor: "#F83758",
    borderRadius: s(4),
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: s(18),
    textAlign: "center",
  },
});
