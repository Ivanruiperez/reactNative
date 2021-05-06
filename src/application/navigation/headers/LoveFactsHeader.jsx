import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { arrowImage } from "../../assets/Assets";
import { useNavigation } from "@react-navigation/native";

export default function LoveFactsHeader() {
  const { goBack } = useNavigation();
  return (
    <View
      style={{
        paddingTop: getStatusBarHeight(),
        margin: 15,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          goBack();
        }}
      >
        <Image source={arrowImage()} />
      </TouchableOpacity>
    </View>
  );
}
