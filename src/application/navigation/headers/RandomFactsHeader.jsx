import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { catImage } from "../../assets/Assets";
import { ScreenName } from "../../entities/ScreenName";
import { useNavigation } from "@react-navigation/native";

export default function RandomFactsHeader() {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        paddingTop: getStatusBarHeight(),
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 15,
      }}
    >
      <Image source={catImage()} />
      <TouchableOpacity
        onPress={() => {
          navigate(ScreenName.loveFacts);
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
          }}
        >
          View my Favs
        </Text>
      </TouchableOpacity>
    </View>
  );
}
