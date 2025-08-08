import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "react-native-size-matters";
import SignInForm from "../components/SignInForm";
import OtherSignInMethod from "../components/OtherSignInMethod";

const SignInScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome Back!</Text>
      </View>
      <SignInForm />
      <OtherSignInMethod />
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: s(20),
  },
  title: {
    fontSize: s(36),
    fontWeight: "bold",
    width: s(185),
    lineHeight: s(43),
  }
});
