import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";

import colors from "../../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />

      <Image
        resizeMode="contain"
        style={styles.productImage}
        source={require("../assets/nikeShoe.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.gold,
    position: "absolute",
    top: 40,
    left: 40,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    right: 40,
  },
});

export default ViewImageScreen;
