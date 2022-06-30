import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
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
});

export default ViewImageScreen;
