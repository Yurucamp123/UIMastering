import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";

interface ProductBannerProps {
  label?: string;
  colorBackground?: string;
  colorButton?: string;
  colorText?: string;
}

const ProductBanner = ({
  label,
  colorBackground,
  colorButton,
  colorText,
}: ProductBannerProps) => {
  return (
    <View
      style={{
        backgroundColor: colorBackground,
        width: s(285),
        height: vs(110),
        paddingHorizontal: s(15),
        borderRadius: s(15),
        paddingTop: vs(20),
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: s(16),
          fontWeight: "bold",
          paddingRight: s(55),
          marginBottom: vs(12),
        }}
      >
        {label}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: colorButton,
          width: s(80),
          height: vs(26),
          borderRadius: s(17.65),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: colorText, fontWeight: "bold" }}>Get Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductBanner;

const styles = StyleSheet.create({});
