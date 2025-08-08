import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
const CATEGORIES = [
  {
    id: 1,
    icon: <Feather name="watch" size={24} color="rgba(0,0,0,0.4)" />,
    activeIcon: <Feather name="watch" size={24} color="white" />,
  },
  {
    id: 2,
    icon: <FontAwesome5 name="tshirt" size={24} color="rgba(0,0,0,0.4)" />,
    activeIcon: <FontAwesome5 name="tshirt" size={24} color="white" />,
  },
  {
    id: 3,
    icon: (
      <FontAwesome5 name="shopping-bag" size={24} color="rgba(0,0,0,0.4)" />
    ),
    activeIcon: <FontAwesome5 name="shopping-bag" size={24} color="white" />,
  },
  {
    id: 4,
    icon: <MaterialCommunityIcons name="shoe-formal" size={24} color="rgba(0,0,0,0.4)" />,
    activeIcon: (
      <MaterialCommunityIcons name="shoe-formal" size={24} color="white" />
    ),
  },
  {
    id: 5,
    icon: <FontAwesome6 name="glasses" size={24} color="rgba(0,0,0,0.4)" />,
    activeIcon: <FontAwesome6 name="glasses" size={24} color="white" />,
  },
];

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const handleSelectCategory = (id: number) => {
    setSelectedCategory(id);
  };

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const isSelected = selectedCategory === item.id;
          return (
            <TouchableOpacity
              onPress={() => handleSelectCategory(item.id)}
              style={
                isSelected ? styles.categoryActive : styles.categoryInactive
              }
            >
              {isSelected ? item.activeIcon : item.icon}
            </TouchableOpacity>
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: s(16),
          paddingHorizontal: s(16),
          paddingTop: vs(5),
        }}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  categoryInactive: {
    width: s(58),
    height: s(58),
    borderRadius: s(8),
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: s(1),
    borderColor: "rgba(216,211,211,0.5)",
  },

  categoryActive: {
    width: s(58),
    height: s(58),
    borderRadius: s(8),
    backgroundColor: "#F17547",
    justifyContent: "center",
    alignItems: "center",
  },
});
