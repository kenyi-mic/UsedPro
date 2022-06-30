import { View, Text, ImageBackground } from "react-native";
import React from "react";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
    ></ImageBackground>
  );
};

export default WelcomeScreen;
