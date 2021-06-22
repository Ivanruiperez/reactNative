import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export function Button(props) {
  const { title, buttonStyle, textStyle, onPressFunction } = props;
  return (
    <View>
      <TouchableOpacity style={buttonStyle} onPress={() => onPressFunction()}>
        <Text key={buttonStyle} style={{ ...textStyle, fontWeight: "bold" }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
