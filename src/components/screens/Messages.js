import React, { Component } from "react";
import {
  TextInput,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Text,
  Button,
  CheckBox
} from "react-native";
import config from "../../config";
import { Statusbar } from "../container";

export default class Messages extends Component {
  constructor() {
    super();

    this.state = {
      hidePassword: true,
      check: false
    };
  }

  onPress(state) {
    if (state == 0) {
      this.props.navigation.navigate("signup");
    } else {
      this.props.navigation.navigate("login");
    }
  }

  static navigationOptions = ({ navigation }) => {
    let tabBarLabel = "Messages";
    let tabBarIcon = () => (
      <Image
        style={{ width: 26, height: 26, tintColor: "#ffffff" }}
        source={config.images.message}
      />
    );
    return { tabBarLabel, tabBarIcon };
  };

  render() {
    return (
      <View style={styles.container}>
        <Statusbar />

        <View style={styles.cls} />
        <Text style={{ color: "#FF1744", fontSize: 46, textAlign: "left" }}>
          Desir messages!
        </Text>
        <View style={styles.cls} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: 100 + "%",
    paddingHorizontal: 25,
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS === "ios" ? 20 : 0
    //justifyContent: 'flex-end'
  },

  visibilityBtn: {
    position: "absolute",
    right: 3,
    height: 40,
    width: 35,
    padding: 5
  },

  btnImage: {
    resizeMode: "contain",
    height: "100%",
    width: "100%"
  },

  cls: {
    height: 40
  }
});
