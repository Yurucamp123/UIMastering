import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import ProductHeaderCircle from "./ProductHeaderCircle";
import { MenuIcon, SearchIcon } from "../assets/icons";

const ProductHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: s(20),
        marginTop: vs(10)
      }}
    >
      <ProductHeaderCircle icon={<MenuIcon />} />
      <ProductHeaderCircle icon={<SearchIcon />} />
    </View>
  );
};

export default ProductHeader;

const styles = StyleSheet.create({});
