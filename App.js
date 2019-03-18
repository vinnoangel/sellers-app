import React from "react";
import { AsyncStorage, Alert } from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import {
  Welcome,
  Home,
  Login,
  Signup,
  ForgotPassword,
  ResetPassword,
  Ideas,
  Messages,
  NewList,
  IdeaForm
} from "./src/components/screens";

const HomeStack = createStackNavigator({
  Home: Home,
  newlist: NewList
});

const IdeasStack = createStackNavigator({
  ideas: Ideas,
  ideaForm: IdeaForm
});

let MainStack = createBottomTabNavigator(
  {
    home: HomeStack,
    ideas: IdeasStack,
    messages: Messages
  },
  {
    tabBarOptions: {
      activeTintColor: "#D2D2D2",
      inactiveTintColor: "white",
      tarBarPosition: "bottom",
      swipeEnabled: true,
      animationEnabled: true,
      lazy: true,
      activeTintColor: "#D2D2D2",
      labelStyle: {
        fontSize: 14
      },
      style: {
        backgroundColor: "#FF1744"
      }
    }
  }
);

const AuthStack = createStackNavigator({
  welcome: Welcome,
  signup: Signup,
  login: Login,
  forgotPassword: ForgotPassword,
  resetPassword: ResetPassword
});

const AppNavigator = createSwitchNavigator({
  authStack: AuthStack,
  mainStack: MainStack
});

export default createAppContainer(AppNavigator);
