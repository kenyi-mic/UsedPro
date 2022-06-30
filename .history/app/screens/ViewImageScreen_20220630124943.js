import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contained"
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
  productImage: {},
});

export default ViewImageScreen;
