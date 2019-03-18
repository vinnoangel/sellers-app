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

export default class Ideas extends Component {
  constructor() {
    super();

    this.state = {
      hidePassword: true,
      check: false
    };
  }

  onPress(state) {
    if (state == 1) {
      this.props.navigation.navigate("ideaform");
    }
  }

  static navigationOptions = ({ navigation }) => {
    let tabBarLabel = "Ideas";
    let tabBarIcon = () => (
      <Image
        style={{ width: 26, height: 26, tintColor: "#ffffff" }}
        source={config.images.eye}
      />
    );
    return { tabBarLabel, tabBarIcon };
  };

  render() {
    return (
      <View style={styles.container}>
        <Statusbar />

        <View style={styles.cls} />
        <View
          style={{
            width: 100 + "%",
            backgroundColor: "rgb(255,255,255)",
            flexDirection: "row",
            paddingHorizontal: 10,
            justifyContent: "space-between"
          }}
        >
          <Text style={{ color: "#FF1744", fontSize: 26, textAlign: "left" }}>
            Ideas!
          </Text>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.4}
              onPress={() => {
                this.onPress(1);
              }}
            >
              <Text style={styles.buttonText}> Post new idea </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cls} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  button: {
    width: 160,
    backgroundColor: "#FF1744",
    borderRadius: 30,
    paddingVertical: 10
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center"
  },
  buttons: {
    width: 50 + "%"
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
