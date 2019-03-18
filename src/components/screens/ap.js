import React from "react";
import { AsyncStorage, Alert, SafeAreaView, ScrollView, Dimensions, View, Image } from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator,
  DrawerItems,
  createAppContainer
} from "react-navigation";
import {
  Welcome,
  Home,
  Login,
  Signup,
  ForgotPassword,
  ResetPassword,
  Orders,
  Products,
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

// mainStack: MainStack,
// newlist: NewList,

const customDrawerComponent = (props) => (
  <SafeAreaView style={{flex: 1}}>
    <View style={{height: 150, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('./assets/home.png')} style={{height: 120, width: 120, borderRadius: 60}} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const MyDrawerNavigator = createDrawerNavigator({
  order: Orders,
  product: Products,

},{
  contentComponent: customDrawerComponent,
}

);

const AppNavigator = createSwitchNavigator({
  authStack: AuthStack,
  mainStack: MyDrawerNavigator
});

export default createAppContainer(AppNavigator);
