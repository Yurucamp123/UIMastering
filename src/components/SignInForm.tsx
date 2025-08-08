import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputSignIn from "./InputSignIn";
import { s, vs } from "react-native-size-matters";
import ButtonStyleList from "./ButtonStyleList";

const SignInForm = () => {
  return (
    <View style={styles.container}>
      <InputSignIn placeholder="Username or Email" />
      <View style={{ marginTop: vs(30) }}></View>
      <InputSignIn placeholder="Password" isPassword={true} />
      <Text
        style={{
          marginTop: vs(8),
          color: "#F83758",
          marginBottom: vs(50),
          fontSize: s(12),
          textAlign: "right",
        }}
      >
        Forgot Password?
      </Text>

      <ButtonStyleList label="Login" />
    </View>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
  container: {
    paddingTop: vs(30),
    marginBottom: vs(65),
  },
});
