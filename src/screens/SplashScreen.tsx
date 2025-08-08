import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LogoStyleListIcon } from "../assets/icons";
import { s } from "react-native-size-matters";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <LogoStyleListIcon />
      <Text style={styles.text}>Stylish</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  text: {
    color: "#F83758",
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: s(10),
  },
});
