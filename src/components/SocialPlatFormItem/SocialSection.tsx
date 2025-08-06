import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import SendButton from "./SendButton";

type SocialSection = {
  title: string;
  icon?: React.ReactNode;
};

const SocialSection: FC<SocialSection> = ({ title = "", icon }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.circle}>{icon}</TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
      <SendButton />
    </View>
  );
};

export default SocialSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E4E6E8",
    paddingVertical: vs(15),
  },

  text: {
    marginStart: s(14),
    flex: 1,
    color: "#8083A3",
    fontSize: s(12),
  },

  circle: {
    height: s(46),
    width: s(46),
    borderRadius: s(23),
    borderWidth: s(1),
    borderColor: "#E4E6E8",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
