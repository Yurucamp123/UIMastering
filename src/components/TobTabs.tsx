import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";

const tabArrays = ["Live", "Recorded"];
const ACTIVE_BG = "#75563B";
const ACTIVE_TEXT = "#FFF";
const INACTIVE_TEXT = "#2C2016";
const TobTabs = () => {
  const [activeTab, setActiveTab] = React.useState("Live");
  return (
    <View style={styles.container}>
      {tabArrays.map((tab, idx) => {
        const isLast = idx === tabArrays.length - 1;
        return (
          <TouchableOpacity
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tabButton,
              !isLast && { marginRight: 10 },
              activeTab === tab && { backgroundColor: ACTIVE_BG },
            ]}
            key={tab}
          >
            <Text
              style={
                activeTab === tab ? styles.activeText : styles.inActiveText
              }
            >
              {tab}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TobTabs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F4",
    borderRadius: s(12),
    height: vs(40),
    flexDirection: "row",
    alignItems: "center",
    padding: s(4)
  },
  tabButton: {
    height: s(32),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: s(8),
  },

  activeText: {
    color: ACTIVE_TEXT,
    fontSize: s(14),
    fontWeight: "semibold",
  },
  inActiveText: {
    color: INACTIVE_TEXT,
    fontSize: s(14),
    fontWeight: "semibold",
  },
});
