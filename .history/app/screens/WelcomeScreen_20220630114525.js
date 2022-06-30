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
        <Text style={{textAlign: "center}}>Sale and buy the used products here in used products</Text>
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
});

export default WelcomeScreen;
