import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "../../components/button/Button";
import { connect } from "react-redux";
import { requestFact, saveFact } from "../../../Redux/actions/appActions";
import {
  blackButton,
  whiteButton,
  background,
  container,
  factContainer,
  factFontStyle,
  buttonsContainer,
  blackButtonTextStyle,
} from "./style";

function RandomFactsScreen({ fact, dispatch }) {
  const [useEffectCounter, setUseEffectCounter] = useState(0);

  useEffect(() => {
    dispatch(requestFact());
  }, [useEffectCounter]);

  return (
    <View style={background}>
      <View style={container}>
        <View style={factContainer}>
          {fact && fact.length ? (
            <Text style={factFontStyle}>{fact}</Text>
          ) : (
            <Text>Loading fact...</Text>
          )}
        </View>

        <View style={buttonsContainer}>
          <Button
            title="Give me another"
            buttonStyle={blackButton}
            textStyle={blackButtonTextStyle}
            onPressFunction={() => setUseEffectCounter(useEffectCounter + 1)}
          />
          <Button
            title="Love it!"
            buttonStyle={whiteButton}
            onPressFunction={() => dispatch(saveFact(fact))}
          />
        </View>
      </View>
    </View>
  );
}
function mapStateToProps({ factReducer }) {
  return {
    fact: factReducer.factText,
  };
}
export default connect(mapStateToProps)(RandomFactsScreen);
