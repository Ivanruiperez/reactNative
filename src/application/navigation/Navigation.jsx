import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationRef } from "./RootNavigation";
import { ScreenName } from "../entities/ScreenName";
import RandomFactsScreen from "../../presentation/screens/randomFacts/RandomFactsScreen";
import LoveFactsScreen from "../../presentation/screens/loveFacts/LoveFactsScreen";
import RandomFactsHeader from "./headers/RandomFactsHeader";
import LoveFactsHeader from "./headers/LoveFactsHeader";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRoutName={ScreenName.randomFacts}
        headerMode="screen"
      >
        <Stack.Screen
          name={ScreenName.randomFacts}
          component={RandomFactsScreen}
          options={{
            header: () => <RandomFactsHeader />,
          }}
        />
        <Stack.Screen
          name={ScreenName.loveFacts}
          component={LoveFactsScreen}
          options={{
            header: () => <LoveFactsHeader />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
