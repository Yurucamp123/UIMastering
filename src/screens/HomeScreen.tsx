import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { s, vs } from "react-native-size-matters";
import TobTabs from "../components/TobTabs";
import { dummyData } from "../data/data";
import MeditationCard from "../components/MeditationCard";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.homeScreenTitle}>Meditations</Text>
        <Text style={styles.meditationDescription}>
          Lorem Ipsum is simply dummy text
        </Text>

        <TobTabs />

        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={dummyData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MeditationCard item={item} />}
          columnWrapperStyle={styles.flatList}
          contentContainerStyle={{ paddingBottom: vs(200), paddingTop: vs(24) }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: s(16),
  },

  flatList: {
    marginBottom: vs(16),
    justifyContent: "space-between",
  },

  homeScreenTitle: {
    fontSize: s(20),
    fontWeight: "semibold",
    color: "#1D150F",
    marginBottom: vs(5),
  },

  meditationDescription: {
    fontSize: s(14),
    color: "#2C2016",
    marginBottom: vs(16),
  },
});
