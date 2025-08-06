import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";
import PaymentMethodCard from "../components/PaymentMethodCard";
import { CashIcon } from "../assets/icons";
import PaymentList from "../components/PaymentList";

const PaymentScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <BackButton />
        <Text style={styles.title}>Payment</Text>
      </View>
      <PaymentList />
    </SafeAreaView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: s(18),
    marginBottom: vs(37),
    paddingHorizontal: s(16),
  },

  title: {
    fontSize: s(17),
    color: "#181C2E",
    marginStart: s(12),
  },
});
