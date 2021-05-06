import React from "react";
import { View, Text } from "react-native";
import getFacts from "../../../actions/Actions";

export default function RandomFactsScreen() {
  const fact = getFacts();
  return <View>{fact !== "error" ? <Text>{fact.text}</Text> : null}</View>;
}
