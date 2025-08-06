import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { CashIcon, WhiteCheckIcon } from "../assets/icons";
import { s, vs } from "react-native-size-matters";

interface PaymentMethodCardProps {
  isSelected?: boolean;
  title: string;
  icon?: React.ReactNode;
  onPress?: () => void;
}

const PaymentMethodCard = ({
  isSelected = false,
  title,
  icon,
  onPress = () => {},
}: PaymentMethodCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: s(85) }}>
      {isSelected && (
        <View style={styles.checkMarkContainer}>
          <WhiteCheckIcon />
        </View>
      )}
      <View style={[styles.paymentWrapper, isSelected && styles.selectedCard]}>
        {icon}
      </View>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PaymentMethodCard;

const styles = StyleSheet.create({
  paymentWrapper: {
    backgroundColor: "#F0F5FA",
    borderRadius: s(10),
    width: s(85),
    height: s(72),
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: s(14),
    color: "#464E57",
    textAlign: "center",
    marginTop: vs(4),
  },
  selectedCard: {
    backgroundColor: "#fff",
    borderWidth: s(2),
    borderColor: "#FF7622",
  },
  checkMarkContainer: {
    height: s(24),
    width: s(24),
    borderRadius: s(12),
    borderWidth: s(2),
    borderColor: "#fff",
    backgroundColor: "#FF7622",
    position: "absolute",
    zIndex: 1,
    top: s(-8),
    right: s(-8),
    justifyContent: "center",
    alignItems: "center",
  },
});
