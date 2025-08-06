import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import {
  CashIcon,
  MastercardIcon,
  PaypalIcon,
  VisaIcon,
} from "../assets/icons";
import PaymentMethodCard from "./PaymentMethodCard";

const paymentMethod = [
  {
    id: 1,
    label: "Cash",
    icon: <CashIcon />,
  },
  {
    id: 2,
    label: "Visa",
    icon: <VisaIcon />,
  },
  {
    id: 3,
    label: "MasterCard",
    icon: <MastercardIcon />,
  },
  {
    id: 4,
    label: "PayPal",
    icon: <PaypalIcon />,
  },
];

const PaymentList = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Cash");
  const handleSelectPaymentMethod = (label: string) => {
    setSelectedPaymentMethod(label);
  };
  return (
    <View>
      <FlatList
        data={paymentMethod}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PaymentMethodCard
            title={item.label}
            icon={item.icon}
            onPress={() => handleSelectPaymentMethod(item.label)}
            isSelected={selectedPaymentMethod === item.label}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: s(16),
          paddingHorizontal: s(16),
          paddingTop: vs(15),
        }}
      />
    </View>
  );
};

export default PaymentList;

const styles = StyleSheet.create({});
