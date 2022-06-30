import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import React from "react";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      {" "}
      <Image source={require("../assets/logo.png")} />
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "red",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "green",
  },
});

export default WelcomeScreen;
