import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { whiteButton } from "../../screens/randomFacts/style";
import { Button } from "../button/Button";
import {
  screenModal,
  container,
  closeButtonModal,
  styleCloseButton,
  factTextModal,
  positionButtonRemove,
} from "./style";

export default function Modal({ fact, isOpen, setIsOpen, removeFactFunction }) {
  return isOpen ? (
    <View style={screenModal}>
      <View style={container}>
        <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
          <View style={closeButtonModal}>
            <Text style={styleCloseButton}>X</Text>
          </View>
        </TouchableOpacity>
        <Text style={factTextModal}>{fact}</Text>
        <View style={positionButtonRemove}>
          <View style={whiteButton}>
            <Button title="Remove" onPressFunction={removeFactFunction} />
          </View>
        </View>
      </View>
    </View>
  ) : null;
}
