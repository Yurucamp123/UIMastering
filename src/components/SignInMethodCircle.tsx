import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { GoogleIcon } from "../assets/icons";
import { s, vs } from "react-native-size-matters";

interface SignInMethodCircleProps {
  icon?: React.ReactNode;
}
const SignInMethodCircle = ({ icon }: SignInMethodCircleProps) => {
  return <TouchableOpacity style={styles.circle}>{icon}</TouchableOpacity>;
};

export default SignInMethodCircle;

const styles = StyleSheet.create({
  circle: {
    width: s(54),
    height: s(54),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: s(1),
    borderColor: "#F83758",
    backgroundColor: "#FCF3F6",
    borderRadius: s(27),
  },
});
