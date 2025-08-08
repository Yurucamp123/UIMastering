import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const PRODUCTS = [
  {
    id: 1,
    sale: 50,
    name: "Redmi Note 4",
    salePrice: 45000,
    discountPrice: 60000,
  },
];

const ProductList = () => {
  return (
    <View>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <View>
            
        </View>}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
