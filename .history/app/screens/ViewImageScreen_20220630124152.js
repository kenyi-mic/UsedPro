import { View, Text } from "react-native";
import React from "react";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/nikeShoe.jpg")} />
    </View>
  );
};

export default ViewImageScreen;
