import React, { Component } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Text
} from "react-native";
import { Statusbar } from "../container";

export default class ForgotPassword extends Component {
  constructor() {
    super();
  }

  onPress(state) {
    if (state == 0) {
      this.props.navigation.navigate("signup");
    } else {
      this.props.navigation.navigate("login");
    }
  }

  static navigationOptions = {
     header: null,
   };

  render() {
    return (
      <View style={styles.container}>
        <Statusbar />

        <View style={styles.cls} />

        <Text style={{ color: "#FF1744", fontSize: 22, textAlign: "left" }}>
          Forgot your password? We will help you create a new one.
        </Text>

        <View style={styles.cls} />

        <TextInput
          style={styles.textBox}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#808080"
        />

        <View style={styles.textBoxBtnHolder}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.4}
            onPress={() => {
              this.onPress();
            }}
          >
            <Text style={styles.buttonText}> Send Code </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cls} />

        <Text style={{ textAlign: "center" }}>
          Don't have an account yet?&nbsp;
          <Text
            style={{ color: "#FF1744" }}
            onPress={() => {
              this.onPress(0);
            }}
          >
            Sign Up
          </Text>
        </Text>

        <View style={styles.cls} />

        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => {
            this.onPress(1);
          }}
        >
          <Text style={{ textAlign: "center", color: "#FF1744" }}>
            I have my password
          </Text>
        </TouchableOpacity>
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

  button: {
    backgroundColor: "#FF1744",
    borderRadius: 15,
    marginVertical: 10,
    paddingVertical: 10
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center"
  },

  imageLogo: {
    width: 120,
    height: 120
  },

  textBoxBtnHolder: {
    position: "relative",
    alignSelf: "stretch",
    justifyContent: "center"
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100 + "%"
  },

  textBox: {
    fontSize: 18,
    alignSelf: "stretch",
    height: 45,
    paddingRight: 45,
    paddingLeft: 8,
    paddingVertical: 0,
    backgroundColor: "#fff",
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#000000",
    marginVertical: 10
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
