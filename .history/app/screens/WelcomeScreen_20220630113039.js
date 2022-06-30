import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    ></ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default WelcomeScreen;
