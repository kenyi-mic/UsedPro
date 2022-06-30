import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import React from "react";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.logoDescription}>
          Largest Second-Hand Product store
        </Text>
      </View>

      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
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
  logoContainer: {
    top: 70,
    position: "absolute",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoDescription: {
    fontSize: 18,
    fontWeight: "bold",
    color: "darkblue",
    textShadowColor: "black",
    textShadowRadius: 2,
  },
});

export default WelcomeScreen;
