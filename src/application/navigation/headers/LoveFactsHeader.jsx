import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { arrowImage } from "../../assets/Assets";
import { useNavigation } from "@react-navigation/native";
import { container, background } from "./style";

export default function LoveFactsHeader() {
  const { goBack } = useNavigation();
  return (
    <View style={background}>
      <View style={container}>
        <TouchableOpacity
          onPress={() => {
            goBack();
          }}
        >
          <Image source={arrowImage()} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
