import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import ButtonStyleList from "../components/ButtonStyleList";

const StyleListHomeScreen = () => {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/images/getstarted.png")}
    >
      <View style={styles.container}>
        <LinearGradient
          colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,0.7)"]} // Nhạt trên, đậm dưới
          style={styles.overlay}
          start={{ x: 0.5, y: 0 }} // Bắt đầu ở giữa trên
          end={{ x: 0.5, y: 1 }} // Kết thúc ở giữa dưới
        />

        <Text
          style={{
            textAlign: "center",
            fontSize: s(34),
            fontWeight: "semibold",
            color: "#fff",
            marginBottom: vs(10),
            paddingHorizontal: s(40),
          }}
        >
          You want Authentic, here you go!
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: s(14),
            color: "#F2F2F2",
            marginBottom: vs(40),
          }}
        >
          Find it here, buy it now!
        </Text>
        <ButtonStyleList label="Get Started" />
      </View>
    </ImageBackground>
  );
};

export default StyleListHomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: s(20),
    marginTop: "auto",
    marginBottom: vs(32),
    position: "relative",
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    top: vs(-20),
    left: 0,
    right: 0,
    bottom: vs(-32),
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    zIndex: 0,
  },
});
