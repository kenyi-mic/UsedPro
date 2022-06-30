import { View, Text, ImageBackground } from "react-native";
import React from "react";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={register("../assets/background.jpg")}
    ></ImageBackground>
  );
};

export default WelcomeScreen;
