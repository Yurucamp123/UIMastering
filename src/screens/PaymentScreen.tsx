import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { s, vs } from "react-native-size-matters";
import BackButton from "../components/BackButton";
import BankCardBox from "../components/BankCardBox";
import PaymentList from "../components/PaymentList";
import AddCardButton from "../components/AddCardButton";
import PayAndConfirmButton from "../components/PayAndConfirmButton";

const PaymentScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <BackButton />
        <Text style={styles.title}>Payment</Text>
      </View>
      <PaymentList />
      <View style={{ paddingHorizontal: s(16) }}>
        <BankCardBox />
        <AddCardButton />
      </View>
      <View
        style={{
          paddingHorizontal: s(16),
          marginTop: vs(40),
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={styles.totalPriceLabel}>Total: </Text>
        <Text style={styles.totalPriceText}>$96</Text>
      </View>
      <View style={{ paddingHorizontal: s(16) }}>
        <PayAndConfirmButton />
      </View>
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

  totalPriceLabel: {
    color: "#A0A5BA",
    fontSize: s(14),
    marginRight: s(20)
  },

  totalPriceText: {
    color: "#181C2E",
    fontSize: s(28),
  },
});
