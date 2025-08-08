import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import ProductBanner from "./ProductBanner";

const BANNERS = [
  {
    id: 1,
    label: "20% OFF DURING THE WEEKEND",
    colorBackground: "#F17547",
    colorButton: "#fff",
    colorText: "#F17547",
  },
  {
    id: 2,
    label: "20% OFF DURING THE WEEKEND",
    colorBackground: "#1383F1",
    colorButton: "#50D63B",
    colorText: "#fff",
  },
];

const BannerList = () => {
  return (
    <View style={{ marginTop: s(15) }}>
      <FlatList
        data={BANNERS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <ProductBanner
              label={item.label}
              colorBackground={item.colorBackground}
              colorButton={item.colorButton}
              colorText={item.colorText}
            />
          );
        }}
        contentContainerStyle={{
          gap: s(16),
          paddingHorizontal: s(16),
          paddingTop: vs(5),
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default BannerList;

const styles = StyleSheet.create({});
