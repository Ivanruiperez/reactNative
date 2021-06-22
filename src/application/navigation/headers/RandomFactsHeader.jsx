import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { catImage } from "../../assets/Assets";
import { ScreenName } from "../../entities/ScreenName";
import { useNavigation } from "@react-navigation/native";
import { container, background, viewFavsButton } from "./style";

export default function RandomFactsHeader() {
  const { navigate } = useNavigation();
  return (
    <View style={background}>
      <View style={container}>
        <Image source={catImage()} />
        <TouchableOpacity
          onPress={() => {
            navigate(ScreenName.loveFacts);
          }}
        >
          <Text style={viewFavsButton}>View my Favs</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
