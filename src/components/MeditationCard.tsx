import React, { FC } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import { VideoIcon } from "../assets/icons";

const PhoneWidth = Dimensions.get("window").width;
const CARD_WIDTH = (PhoneWidth - s(16) * 3) / 2;

interface MeditationCardProps {
  item: {
    id: string;
    image: string;
    title: string;
    date: string;
  };
}

const MeditationCard: FC<MeditationCardProps> = ({ item }) => {
  return (
    <ImageBackground
      source={{
        uri: item.image,
      }}
      style={styles.imageContainer}
      imageStyle={styles.image}
    >
      <View style={styles.darkOverlay} />
      <View style={styles.liveBadge}>
        <Text style={styles.liveText}>Live</Text>
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <VideoIcon />
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MeditationCard;

const styles = StyleSheet.create({
  imageContainer: {
    height: vs(130),
    width: CARD_WIDTH,
    borderRadius: s(12),
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    opacity: 0.7,
  },

  cardContent: {
    position: "absolute",
    bottom: vs(10),
    left: s(10),
  },

  title: {
    color: "#fff",
    fontSize: s(12),
    fontWeight: "bold",
  },

  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },

  dateText: {
    fontSize: s(12),
    color: "#fff",
    marginStart: s(7),
  },

  liveBadge: {
    height: vs(22),
    width: s(39),
    backgroundColor: "#E41111",
    borderRadius: s(90),
    position: "absolute",
    right: s(10),
    top: vs(7),
    justifyContent: "center",
    alignItems: "center",
  },

  liveText: {
    fontSize: s(11),
    fontWeight: "semibold",
    color: "#fff",
  },
});
