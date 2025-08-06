import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { s, vs } from "react-native-size-matters";
import BackButton from "../components/BackButton";
import SocialSection from "../components/SocialPlatFormItem/SocialSection";
import UserAvatar from "../components/UserAvatar";
import {
  InstagramIcon,
  SnapchatIcon,
  TiktokIcon,
  TwitterIcon,
  WhatsAppIcon,
} from "../assets/icons";

const ContactUsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <UserAvatar />
      </View>
      <Text style={styles.screenTitle}>Contact Us</Text>
      <View style={styles.socialContainer}>
        <Text style={styles.socialTitle}>Social Media Platforms</Text>
        <SocialSection title={"WhatsApp"} icon={<WhatsAppIcon />} />
        <SocialSection title={"Twitter"} icon={<TwitterIcon />} />
        <SocialSection title={"Instagram"} icon={<InstagramIcon />} />
        <SocialSection title={"Snap chat"} icon={<SnapchatIcon />} />
        <SocialSection title={"Tik Tok"} icon={<TiktokIcon />} />
      </View>
    </SafeAreaView>
  );
};

export default ContactUsScreen;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: s(17),
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  socialContainer: {
    backgroundColor: "#F5F5FA",
    borderRadius: s(14),
    paddingHorizontal: s(18),
    paddingVertical: s(20),
    marginTop: s(22),
  },

  socialTitle: {
    fontSize: s(16),
    fontWeight: "semibold",
    fontFamily: "IBM_Plex_Sans_Semibold",
  },

  screenTitle: {
    fontSize: s(30),
    fontWeight: "bold",
    marginTop: vs(30),
    marginStart: s(18),
  },
});
