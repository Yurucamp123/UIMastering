import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { CardPaymentIcon } from "../assets/icons";
import LottieView from "lottie-react-native";

const BankCardBox = () => {
  return (
    <View style={styles.container}>
      {/* <LottieView
        autoPlay
        // ref={animation}
        style={{
          width: s(175),
          height: vs(175),
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../assets/BankCardAnimation.json")}
      /> */}
      <CardPaymentIcon />
      <Text style={styles.title}>No master card added</Text>
      <Text style={styles.description}>
        You can add a mastercard and save it for later
      </Text>
    </View>
  );
};

export default BankCardBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F8F9",
    borderRadius: s(10),
    marginTop: s(25),
    justifyContent: "center",
    alignItems: "center",
    paddingTop: vs(35),
    paddingHorizontal: s(30),
    paddingBottom: vs(25),
  },

  title: {
    color: "#32343E",
    fontWeight: "bold",
    fontSize: s(16),
    marginTop: vs(17),
  },

  description: {
    color: "#A1A4B2",
    fontSize: s(15),
    marginTop: vs(6),
    textAlign: "center",
  },
});
