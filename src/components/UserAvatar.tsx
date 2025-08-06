import React from "react";
import { Image, StyleSheet } from "react-native";
import { s } from "react-native-size-matters";

const UserAvatar = () => {
  return (
    <Image
      style={styles.avatar}
      source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrOy5z90iLbiRND-3MHN7sCb7pV45Db0wY9g&s",
      }}
    />
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  avatar: {
    width: s(32),
    height: s(32),
    borderRadius: s(16),
  },
});