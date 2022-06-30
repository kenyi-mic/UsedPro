import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />

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
    backgroundColor: "black",
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    position: "absolute",
    top: 50,
    left: 50,
  },
});

export default ViewImageScreen;
