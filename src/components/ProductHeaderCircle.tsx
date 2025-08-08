import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";

interface ProductHeaderCircleProps {
  icon?: React.ReactNode;
}

const ProductHeaderCircle = ({ icon }: ProductHeaderCircleProps) => {
  return (
    <View
      style={{
        width: s(40),
        height: s(40),
        borderRadius: s(20),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D9D9D9",
      }}
    >
      {icon}
    </View>
  );
};

export default ProductHeaderCircle;

const styles = StyleSheet.create({});
