import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { s } from "react-native-size-matters";
import { AppleIcon, FacebookIcon, GoogleIcon } from "../assets/icons";
import SignInMethodCircle from "./SignInMethodCircle";

const OtherSignInMethod = () => {
  return (
    <View style={{ paddingHorizontal: s(60) }}>
      <Text
        style={{
          color: "#575757",
          textAlign: "center",
          fontSize: s(12),
          fontWeight: "semibold",
        }}
      >
        - OR Continue with -
      </Text>

      <View style={styles.signInMethodsContainer}>
        <SignInMethodCircle icon={<GoogleIcon />} />
        <SignInMethodCircle icon={<AppleIcon />} />
        <SignInMethodCircle icon={<FacebookIcon />} />
      </View>

      <View>
        <Text
          style={{ textAlign: "center", fontSize: s(14), color: "#575757" }}
        >
          Create An Account{" "}
          <Text
            style={{
              textDecorationLine: "underline",
              color: "#F83758",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default OtherSignInMethod;

const styles = StyleSheet.create({
  signInMethodsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: s(20),
    marginBottom: s(30),
  },
});
