import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { ConvertScreen } from "./screens";

export default function Routes() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ConvertScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="ConvertScreen" component={ConvertScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
