import React, { useState } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import Modal from "../../components/modal/Modal";
import { TouchableOpacity } from "react-native-gesture-handler";
import { removeFact } from "../../../Redux/actions/appActions";
import { background, container, factContainer, factTextStyle } from "./style";

function LoveFactsScreen({ lovedFacts, dispatch }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFact, setSelectedFact] = useState("");

  return (
    <View style={background}>
      <View style={container}>
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          fact={selectedFact}
          removeFactFunction={() => {
            dispatch(removeFact(selectedFact));
            setIsOpen(!isOpen);
          }}
        />

        {lovedFacts.map((fact) => (
          <View key={fact} style={factContainer}>
            <TouchableOpacity
              onPress={() => {
                setSelectedFact(fact);
                setIsOpen(!isOpen);
              }}
            >
              <Text key={fact} style={factTextStyle}>
                {fact}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}
function mapStateToProps({ factReducer }) {
  return {
    lovedFacts: factReducer.lovedFacts,
  };
}
export default connect(mapStateToProps)(LoveFactsScreen);
