import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StackActions } from "@react-navigation/native";

export default function MainStack() {
  return (
    <StackActions.Navigator>
      <StackActions.Screen name="Preload" component={Preload} />
      {/* <StackActions.Screen name="SignIn" component={SignIn} />
          <StackActions.Screen name="SignUp" component={SignUp} />
    */}
    </StackActions.Navigator>
  );
}
