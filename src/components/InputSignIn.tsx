import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { PasswordIcon, ViewPasswordIcon } from "../assets/icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
interface InputSignInProps {
  placeholder?: string;
  isPassword?: boolean;
}

const InputSignIn = ({ placeholder, isPassword }: InputSignInProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        {isPassword ? (
          <PasswordIcon />
        ) : (
          <FontAwesome name="user" size={24} color="#626262" />
        )}
      </View>
      <TextInput
        secureTextEntry={isPassword}
        placeholder={placeholder}
        style={styles.inputContainer}
        placeholderTextColor={"#676767"}
      />
      {isPassword && (
        <View style={styles.viewIcon}>
          <ViewPasswordIcon />
        </View>
      )}
    </View>
  );
};

export default InputSignIn;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent: "center",
  },
  inputContainer: {
    paddingLeft: s(40),
    paddingVertical: vs(16),
    borderWidth: s(1),
    borderColor: "#A8A8A9",
    backgroundColor: "#F3F3F3",
    borderRadius: s(10),
    fontSize: s(12),
  },
  icon: {
    position: "absolute",
    left: s(16),
    top: "50%",
    transform: [{ translateY: -12 }],
    zIndex: 1,
  },
  viewIcon: {
    position: "absolute",
    right: s(12),
    top: "50%",
    transform: [{ translateY: -12 }],
    zIndex: 1,
  },
});
