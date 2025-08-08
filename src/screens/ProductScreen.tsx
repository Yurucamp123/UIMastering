import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductHeader from "../components/ProductHeader";
import { HandIcon } from "../assets/icons";
import BannerList from "../components/BannerList";
import { s, vs } from "react-native-size-matters";
import CategoryList from "../components/CategoryList";

const ProductScreen = () => {
  return (
    <SafeAreaView>
      <ProductHeader />
      <View style={{ marginTop: vs(20) }}>
        <View style={{ paddingHorizontal: s(20) }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: vs(5),
            }}
          >
            <Text
              style={{
                fontSize: s(20),
                fontWeight: "bold",
              }}
            >
              Hello Fola{" "}
            </Text>
            <HandIcon />
          </View>
          <Text style={{ fontSize: s(12), color: "rgba(0,0,0,0.5)" }}>
            Let’s start shopping!
          </Text>
        </View>
        <BannerList />
      </View>

      <View style={{ marginTop: vs(20) }}>
        <View style={{ paddingHorizontal: s(20) }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: vs(5),
            }}
          >
            <Text
              style={{
                fontSize: s(20),
                fontWeight: "bold",
              }}
            >
              Top Category
            </Text>
            <Text style={{ fontSize: s(16), color: "#F17547" }}>
              See All
            </Text>
          </View>
        </View>
        <CategoryList />
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
